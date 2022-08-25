import React from "react";
import "./vid.css";

const Vid = ({ vidsrc }) => {
  return (
    <div className="vid">
      {/* <img src={imageSrc} alt="SIH" className="vid__video"/> */}
      <video autoPlay muted loop alt="SIC" className="vid__video">
        <source src={vidsrc}/>
      </video>
      <h1 className="vid__title">SIC:VISUAL PLATFORM.</h1>
    </div>
  );
};

export default Vid;