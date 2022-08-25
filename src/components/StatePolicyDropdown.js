import React, { useEffect, useState } from 'react'
import axios from "axios";

//import AsyncSelect from 'react-select/async'
//import {  FormControl, InputLabel, MenuItem, Select, TableContainer } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,InputGroup, Table} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { policy } from '../Data/PolicyDropDown';
import { useStyles } from "./utils";
import PMYA from './PolicyState/PMYA'
import PMYB from './PolicyState/PMYB'

function StatePolicyDropDown() {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [dataapi,setDataapi]=useState([]);

    //const [PMAYStateAPI, setPMAYStateAPI] = useState([]);
    const [selectedValue, setselectedValue] = useState([]);
    const [car, setCar] = useState("SelectDreamCar");

    const [PMYA_state, setPMYA] = useState(false);
    const [PMYB_state, setPMYB] = useState(false);

    const Ddlhandle = (e)=> {
        setselectedValue(e);
      };
    const handleChange = (e) =>{
        setCar(e.target.value);
    }

    const makeCap = (str)=>{
        return str.charAt(0).toUpperCase()+str.slice(1);

    }
    const renderResult=() =>{
        let result;
        car ==="SelectDreamCar" 
        ? ( result = " select car")
        : ( result = makeCap(car));

        car ==="PMYA" 
        ? ( result = " select car")
        : ( result = makeCap(car));

        car ==="PMYB" 
        ? ( result = " select car")
        : ( result = makeCap(car));
        return result;

    }
    useEffect(()=>{
        car==="PMYA"  ?  setPMYA(true): setPMYA(false);
        car==="PMYB"  ?  setPMYB(true): setPMYB(false);
    });

    return(
        <>


    <div className='container mt-3'>
        <div>
            <h1>Search Your Policy Here!  </h1>
        </div>
        <div className='mt-4'>
            <select className='form-select' value={car} onChange={handleChange}>
                <option value="SelectDreamCar"> Select </option>
                <option value="PMYA">PMYA</option>
                <option value="PMYB">PMYB</option>
            </select>
        </div>

    </div>
    {PMYA_state && <PMYA />}
    {PMYB_state && <PMYB />}    
    
    </>
    )
  
}
  

export default StatePolicyDropDown;