import React from "react";
import "./Hero.css";
import arrowBtn from "../../assets/images/arrow_btn.png";
import playIcon from "../../assets/images/play_icon.png";
import pauseIcon from "../../assets/images/pause_icon.png";

function Hero({
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
}) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrowBtn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            src={playStatus ? pauseIcon : playIcon}
            alt=""
            onClick={() => setPlayStatus(!playStatus)}
          />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
