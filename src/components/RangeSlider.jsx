// src/components/RangeSlider.js
import React, { useState } from 'react';
// import { FaSlidersH } from 'react-icons/fa';

const RangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="field range-slider">
      <label className="label" htmlFor="slider">Price € :</label>
      <div className="control">
        <input
           type="range"
           class="slider is-fullwidth"
           min="0"
           max="€ 100,000,000"
           step="1"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
      <p className="slider-value">Selected Price: {sliderValue}</p>
    </div>
  );
};

export default RangeSlider;

