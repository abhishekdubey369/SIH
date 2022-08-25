import './main.css';
import React ,{useEffect,useState} from 'react';
import Nav from '../component/mainnav';
import Mainsb from '../component/mainsidebar';

function Main(){
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch("url").then((res)=>{
    //         res.json().then((re)=>{
    //             // console.warn(re);
    //             setData(re);
    //         });
    //     });
    // },[]);
    // console.warn(data);
    return(
        <div className='main'>
            <Nav/>
            <Mainsb />
        </div>
        );
}

export default Main;