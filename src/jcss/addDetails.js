import './addetails.css';
import React ,{useState,useEffect} from 'react';
import Nav from '../component/mainnav';

function ADD(){

    const [name,setName]=useState("");
    const [yojna,setyojna]=useState("");
    const [amount,setAmount]=useState("");
    const [date,setDate]=useState("");
    const [district,setDistrict]=useState("");

    function save(){
        console.warn(name,yojna,amount,date,district);
    }
    return(
        <div className='ADD'>
            <Nav/>
            <form className='form'>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/>
                <input type='text' value={yojna} onChange={(e)=>{setyojna(e.target.value)}} name="yojna"/><br/>
                <input type='text' value={amount} onChange={(e)=>{setAmount(e.target.value)}} name="amount"/><br/>
                <input type='text' value={date} onChange={(e)=>{setDate(e.target.value)}} name="date"/><br/>
                <input type='text' value={district} onChange={(e)=>{setDistrict(e.target.value)}} name="district"/><br/>
                <button onClick={save} name="click">save</button>
            </form>
        </div>
        )

}

export default ADD;