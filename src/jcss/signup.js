import './signin.css';
import React from 'react';
import Navbar from '../component/navbar';
import SignUp from '../components/Singup/index';

function Signup(){

    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
    // const [confirm,setConfirm]=useState("");
    // const [username,setUsername]=useState("");

    // function save(){
    //     console.warn(name,username,email,password,confirm);
    // }

    //     function onSubmit(e){
    //       e.preventDefault();
    //     }

    return(
        <React.Fragment>
            <header>
            <Navbar/>
            </header>
            <SignUp/>
            {/* <div className='signIn'>
            <form onSubmit={onSubmit}>
                <table className='table'>
                    <tbody>
                    <tr><td>Name of organization</td></tr>
                <tr>
                    <td><input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/></td></tr>
    <tr><td>Organization email</td></tr><tr><td><input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="yojna"/></td></tr>
    <tr><td>USERCODE</td></tr><tr><td><input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} name="amount"/></td></tr>
    <tr><td>Password</td></tr><tr><td><input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} name="date"/></td></tr>
    <tr><td>Confirm Password</td></tr><tr><td><input type='text' value={confirm} onChange={(e)=>{setConfirm(e.target.value)}} name="district"/></td></tr>
    <tr><td><button onClick={save} name="click">SignUp</button></td>
                </tr>
                    </tbody>
                    </table>
  
</form>
            </div> */}
        </React.Fragment>
    );

}

export default Signup;