import "./App.css";
import React from "react";
import { BsList } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/users");
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav1">
          <div className="first-side">
            <h1 className="podca">Podca</h1>
          </div>
          <div className="second-side">
            <BsList className="icn-1"></BsList>
          </div>
        </nav>
        <div className="words">
          <div className="main-words1">
            <h1>Episode 09: How To Create Web Page Using Bootstrap 4</h1>
          </div>
          <div className="word-2">
            <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
          </div>
          <button className="btn-1">READ THE TRANSCRIPT</button>
        </div>
      </header>
      <div className="first-page">
        <div className="player">
          <div className="mp3-player">
            <BsPlayFill className="icn-2"></BsPlayFill>
            <p className="time">00:00</p>
            <div className="duration"></div>
            <p className="time2">00:00</p>
            <BsFillVolumeUpFill className="icn-3"></BsFillVolumeUpFill>
            <div className="volume"></div>
          </div>
        </div>
        <div className="big-word">
          <h1 className="recent">Recent Podcasts</h1>
        </div>
        <div className="cards">
          {data.map((d) => (
            <div className="card" key={d._id}>
              <div className="card-img">
                <img className="back-img" src={d.image} />
              </div>
              <div className="card-body">
                <h1 className="episode">{d.episode}</h1>
                <p>{d.info}</p>
                <p>{d.lorem}</p>
                <div className="player2">
                  <div className="mp3-player2">
                    <BsPlayFill className="icn-player2"></BsPlayFill>
                    <p className="time-player">00:00</p>
                    <div className="duration2"></div>
                    <p className="time-player2">00:00</p>
                    <BsFillVolumeUpFill className="icn-player3"></BsFillVolumeUpFill>
                    <div className="volume-2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="second-page">
        <div className="big-word2">
          <h1 className="behind">Behind The Mic</h1>
        </div>
        <div className="front-cards">
          <img  className="pic" src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp"></img>
          <img  className="pic" src="https://preview.colorlib.com/theme/podca/images/person_2.jpg.webp"></img>
          <img  className="pic" src="https://preview.colorlib.com/theme/podca/images/person_3.jpg.webp"></img>
          <img  className="pic" src="https://preview.colorlib.com/theme/podca/images/person_4.jpg.webp"></img>
          <img  className="pic" src="https://preview.colorlib.com/theme/podca/images/person_5.jpg.webp"></img>
          <img  className="pic" src="https://preview.colorlib.com/theme/podca/images/person_6.jpg.webp"></img>
        </div>
      </div>
      <div className="third-page">
        <div className="big-word3">
          <h1 className="featured">Featured Guests</h1>
        </div>
        <div className="front-cards2">
        <img  className="pic2" src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp"></img>
        <div className="person-info">
          <h1>Megan Smith</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Et, iusto.Aliquam illo, cum sed ea?Ducimus quos, ea?</p>
        </div>
          <img  className="pic2" src="https://preview.colorlib.com/theme/podca/images/person_2.jpg.webp"></img>
          <div className="person-info">
          <h1>Brooke Cagle</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Et, iusto.Aliquam illo, cum sed ea?Ducimus quos, ea?</p>
        </div>
          <img  className="pic2" src="https://preview.colorlib.com/theme/podca/images/person_3.jpg.webp"></img>
          <div className="person-info">
          <h1>Philip Martin</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Et, iusto.Aliquam illo, cum sed ea?Ducimus quos, ea?</p>
        </div>
        </div>
      </div>
      <footer className="App-footer">
        <p className="footer-words">Copyright ©2023 All rights reserved | This template is made with ♡ by Colorlib</p>
      </footer>
    </div>
  );
};

export default App;
