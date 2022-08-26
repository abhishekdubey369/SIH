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
  subtitle={<div className='miss'>
  <li>HAVING A PROPER TRACK OF FUNDS DISBURSED AND RESPECTIVE TRANSACTIONS BY THE BENEFICIARIES.</li>
  <li>AREA-WISE DISTRIBUTION OF FUNDS TRACKING AND PROVIDING INFOGRAPHICS OF THE SAME.</li>
</div>}
  flipped={true}
/>


    </React.Fragment>
    );

};

export default LandPage;