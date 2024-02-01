import React from "react";
import "./Background.css";
import video from "../../assets/images/video1.mp4";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";

function Background({ heroCount, playStatus }) {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={img1} alt="" className="background fade-in" />;
  } else if (heroCount === 1) {
    return <img src={img2} alt="" className="background fade-in" />;
  } else if (heroCount === 2) {
    return <img src={img3} alt="" className="background fade-in" />;
  }
}

export default Background;
