import React from 'react';

//pages
import landing from '../assets/back.mp4'
import logo from '../assets/logo192.png'
import Vid from '../component/vid'
import Slider from "../component/sidebar";
import Mission from '../assets/misshion.png'

function LandPage(){

    return(
        <React.Fragment>
<Vid vidsrc={landing}/>

<Slider
  imageSrc={logo}
  title={"DATA VISULAZATION."}
  subtitle={
    "Our platform offers a data visual of transactions!"
  }
/>
<Slider
  imageSrc={Mission}
  title={"Mission."}
  subtitle={"Here mission part will go."}
  flipped={true}
/>


    </React.Fragment>
    );

};

export default LandPage;