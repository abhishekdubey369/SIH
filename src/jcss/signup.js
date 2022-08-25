import './signin.css';
import React ,{useState,useEffect} from 'react';
import Navbar from '../component/navbar'

function signup(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirm,setConfirm]=useState("");
    const [username,setUsername]=useState("");

    function save(){
        console.warn(name,username,email,password,confirm);
    }

        function onSubmit(e){
          e.preventDefault();
        }

    return(
        <div className='signIn'>
            <Navbar/>
            <form onSubmit={onSubmit}>

            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/>
                <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="yojna"/><br/>
                <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} name="amount"/><br/>
                <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} name="date"/><br/>
                <input type='text' value={confirm} onChange={(e)=>{setConfirm(e.target.value)}} name="district"/><br/>
                <button onClick={save} name="click">SignIn</button>
              
            </form>
        </div>
    );

}

export default signup;