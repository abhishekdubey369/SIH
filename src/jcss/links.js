import './links.css';
import React from 'react';
import Navbar from '../component/navbar'
import Slider from '../component/sidebar'
import Img from '../assets/misshion.png'
import ImgO from '../assets/gi.png'
import Links from '../assets/Link.png'

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
                imageSrc={Links}
                title={"Links."}
                subtitle={<div>
                    Links for referenc:<br/>
                    <a href="https://data.gov.in/sector/Statistics/visualizations">link</a><br/>
                    <a href='https://pmayg.nic.in/netiay/PBIDashboard/PMAYGDashboard.aspx'>link2</a><br/>
                    <a href='https://pmkisan.gov.in/?ref=w3use.com'>link3</a><br/>
                    <a href='https://dashboard.rural.nic.in/dashboardnew/mgnrega.aspx'>link4</a><br/>
                </div>}
                flipped={true} />
            </div>
        </div>
    );

}

export default links;