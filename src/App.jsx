import { useEffect, useState } from "react";
import "./App.css";
const date = new Date().toDateString();
function App() {
  let [cityName, cityValue] = useState("rewa");
  let [data, change] = useState(null);
  let [icon2, seticon] = useState("");
  let apikey = "7debdcbb29b066e62462e432473df6cb";
  let clicked = (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
      cityValue(e.target.value.trim());
      console.log(cityName);
    }
  };
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`
    )
      .then((data) => {
        if (!data.ok) {
          throw new Error("plz check the network connection ");
        }
        return data.json();
      })
      .then((redata) => {
        change(redata);
        let icon2 = `https://openweathermap.org/img/wn/${redata.weather?.[0]?.icon}@2x.png`;
        seticon(icon2);
      });
  }, [cityName]);
  console.log(data);
  console.log();
  
  return (
    <>
      <h1>Weather app </h1>
      <main>
        <div className="background_img">
          <div className="textureImg"></div>
          <div className="mainbox">
            <div className="sidenave">
              <input
                onKeyDown={clicked}
                type="text"
                placeholder="Enter your city "
              />
              <div className="degarrData">
                {data?.main?.temp}
                <sup>o</sup>C  +/_ 3
              </div>
              <div className="windSpeed">
                <span>{data?.wind?.deg}<sup>o</sup></span>
                <span>Wind: WSW {data?.wind?.speed}mph</span>
              </div>

              <table>
                <tr>
                  <td>0000</td>
                  <td>.0.8%</td>
                </tr>
                <tr>
                  <td>safe</td>
                  <td>dangerous</td>
                </tr>
                <tr>
                  <td>.udfhd</td>
                  <td>.ljncdndc</td>
                </tr>
                <tr>
                  <td>.udfhd</td>
                  <td>.ljncdndc</td>
                </tr>
              </table>
              <canvas></canvas>
              <div className="footerSidenave">
                <h2>{data?.name} city</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores porro
                </p>
              </div>
            </div>
            <div className="upperContant">
              <h1>national Weather</h1>
              <p>Wrather Forecast</p>
              <pre>
                {`${data?.weather?.[0]?.main}
${data?.weather?.[0]?.description}` }  <img src={icon2} alt="city is not found" />
              </pre>
              <div className="date">
                <p>
                  {data?.name}, {date}
                </p>
              </div>
            </div>
            <div className="uppercount2">
              <table>
                <thead>weather data</thead>
                <tbody>
                  <tr>
                    <td> country</td>
                    <td>"{data?.sys?.country}"</td>
                  </tr>
                  <tr>
                    <td>tempchure</td>
                    <td>{data?.main?.temp}</td>
                  </tr>
                  <tr>
                    <td>feels_like</td>
                    <td>{data?.main?.feels_like}</td>
                  </tr>
                  <tr>
                    <td>humidity</td>
                    <td>{data?.main?.humidity}</td>
                  </tr>
                  <tr>
                    <td>pressure</td>
                    <td>{data?.main?.pressure}/kph</td>
                  </tr>
                  <tr>
                    <td>visibility</td>
                    <td>{data?.visibility}/km</td>
                  </tr>
                  <tr>
                    <td>sunset</td>
                    <td>{new Date((data?.sys?.sunset)*1000).toTimeString()}</td>
                  </tr>
                  <tr>
                    <td>sunrise</td>
                    <td>{new Date((data?.sys?.sunrise)*1000).toTimeString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
/* 
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dheeraj087/weather.git
git push -u origin main
*/