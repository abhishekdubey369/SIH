import Navbar from '../component/navbar';
import React from 'react';
import './about.css';
import Slider from '../component/sidebar'
import Img from '../assets/about.png'

function about(){

    return(
        <div className='about'>
            <Navbar/>
            <div className="cont">
                <Slider
                imageSrc={Img}
                title={"About."}
                subtitle={<div className='about'>
                    Problem statement code – SH1008
Department - Ministry of Rural Development
Name of website - Smart Infographic Conclusions (SIC)
The Ministry of Rural Development, a branch of the Government of India, is entrusted with the task of accelerating the socio-economic development of rural India. Its focus is on health, education, piped drinking water, public housing, and roads.
Ministry of Rural development comes up with various schemes for the overall development in rural areas.
However, it is must to keep a track of the funds disbursed by the Ministry of Rural Development as it is necessary to manage the budget and respective beneficiaries in that area.
A proper record of the same must be maintained to make effective changes in the upcoming schemes and years for overall development of region.
SMART INFOGRAPHIC CONCLUSIONS (SIC) do not only target tracking of the funds disbursed to the beneficiaries but also gives precise statistics for the Ministry to diversify their work which will help in making adequate changes and install respective branches in the same areas. 
                </div>}
                flipped={true} />
            </div>
        </div>
    );

}

export default about;