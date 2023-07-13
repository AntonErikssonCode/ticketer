import React, { useState } from "react";
import "./slider.css";
interface SliderProps {
  firstState: string;
  secondState: string;
}
function Slider({ firstState, secondState }: SliderProps) {
  const [slider, setSlider] = useState(false);

  function changeSlider() {
    setSlider(!slider);
  }
  return (
    <div className="slider" onClick={changeSlider}>
      <div className={`slider-bar center ${slider?"slider-active": ""}`}>
        <h3>{slider ? secondState :  firstState}</h3>
      </div>
      <div className={`slider-label-1 center`}>
       <h4>{firstState}</h4>
      </div> <div className={`slider-label-2 center`}>
      <h4>{secondState}</h4>
       </div>
    </div>
  );
}

export default Slider;
