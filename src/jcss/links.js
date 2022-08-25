import './links.css';
import React from 'react';
import Navbar from '../component/navbar'
import Slider from '../component/sidebar'
import Img from '../assets/misshion.png'
import ImgO from '../assets/gi.png'

function links(){

    return(
        <div className='links'>
            <Navbar/>
            <div className="cont">
                <Slider
                imageSrc={Img}
                title={"Mission."}
                subtitle={"Here Mission part will go."}
                flipped={true} />
                <Slider
                imageSrc={ImgO}
                title={"Vision."}
                subtitle={"Here Vision part will go."}
                flipped={true} />
                <Slider
                imageSrc={null}
                title={"Links."}
                subtitle={"Here Links part will go."}
                flipped={true} />
            </div>
        </div>
    );

}

export default links;