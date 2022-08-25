import './links.css';
import React from 'react';
import Navbar from '../component/navbar'
import Slider from '../component/sidebar'

function links(){

    return(
        <div className='links'>
            <Navbar/>
            <div className="cont">
                <Slider
                imageSrc={null}
                title={"Links."}
                subtitle={"Here link part will go."}
                flipped={true} />
            </div>
        </div>
    );

}

export default links;