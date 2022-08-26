import React, { useState } from "react";
import axios from "axios";

//pages
import Navbar from '../component/navbar';
import '../component/navbar.css'
import Signin from '../components/Login/index'

const Auth = () => {

  return (
    <div className="signIn">
      <header>
        <Navbar/>
      </header>
      <Signin/>

Auth
    </div>
  );
};

export default Auth;
