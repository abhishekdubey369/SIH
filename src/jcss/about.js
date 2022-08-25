import Navbar from '../component/navbar';
import React from 'react';
import './about.css';
import Slider from '../component/sidebar'

function about(){

    return(
        <div className='about'>
            <Navbar/>
            <div className="cont">
                <Slider
                imageSrc={null}
                title={"About."}
                subtitle={"Here about part will go."}
                flipped={true} />
            </div>
        </div>
    );

}

export default about;