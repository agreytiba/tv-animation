import React, { useState } from "react";

const Tv = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  if (isClicked === true) {
    return (
      <div className="out-tv">
        <div className="flex">
          <section className="video-container">
            <div className="vidoe-content">
              <video
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                className="video">
                <source src="assets/mama.mp4" type="video/mp4" />
              </video>
              <img
                src="assets/wasafi.jfif"
                alt="wasafi logo"
                className="wasafi"
              />
            </div>
          </section>
        </div>
        <h6>Hisense</h6>
        <button onClick={handleClick} className="power-btn on">
          OFF
        </button>
      </div>
    );
  }
  return (
    <div className="out-tv">
      <div className="flex">
        <section className="inline-tv">
          <div className="tv">
            <h5> NO SIGNAL</h5>
          </div>
        </section>
      </div>
      <h6>Hisense</h6>
      <button onClick={handleClick} className="power-btn on">
        ON
      </button>
    </div>
  );
};

export default Tv;
