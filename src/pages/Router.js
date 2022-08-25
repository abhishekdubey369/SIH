import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import States from "../components/States";
import StatePolicyDropDown from '../components/StatePolicyDropdown'
import PMYA from '../components/PolicyState/PMYA'
import PMYB from '../components/PolicyState/PMYB'
import SearchDistrict from '../components/SearchDistrict'

import App from '../App'
import About from '../jcss/about';
import Main from '../jcss/main'
import Error from '../jcss/error';
import Links from '../jcss/links'; 
import Add from '../jcss/addDetails';
import Auth from "../components/Auth";
import Blog from '../components/Blog';
import SignUp from '../jcss/signup';
import Chart from '../pages/chart';
import Report from '../pages/reports';


function Routing() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/auth1" element={<SignUp/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/links" element={<Links />} />
            <Route path="/Main" element={<Main/>}/>
            <Route path="/Main/Details" element={<Add/>}/>
            <Route path='/chart' element={<Chart/>}/>
            <Route path='/SIC' element={<Report/>}/>
            <Route exact path="*" element={<Error/>} />
            <Route path="/" exact={true} element={<App />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/policydd" element={<StatePolicyDropDown />} />
            <Route path="/States" element={<States />} />
            <Route path="/StatePMYA" element={<PMYA />} />
            <Route path="/StatePMYB" element={<PMYB />} />
            <Route path="/searchDistrict" element={<SearchDistrict />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
