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


function States() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [dataapi,setDataapi]=useState([]);

  //const [PMAYStateAPI, setPMAYStateAPI] = useState([]);
  const [selectedValue, setselectedValue] = useState([]);
  const [navLinks, setNavLinks] = useState([]);


  

  const Ddlhandle = (e)=> {
    setselectedValue(e);
  };
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8000/api/PMYAState/getAllPMYAStates/")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };


  useEffect(() => {
    sendRequest().then((data) => { setDataapi(data.records); console.log(data);}).catch(err => console.log(err));
    
  }, []);
  console.log("fgj",dataapi);
  
  return (
    <>
    <div>
    <DropdownButton
      align="end"
      title="----* Select Policy *----"
      id="dropdown-menu-align-end"
      onSelect={Ddlhandle}
      > 
      
      {policy.map((i,j)=> ( 
      <Link to={i.path}>
      <Dropdown.Item eventKey={i.Name}>{i.Name}</Dropdown.Item>
      </Link>
      ))}
    </DropdownButton>
    <h1>{selectedValue}</h1>
    
    </div>
    
    <div>
      <Container>
        <h1 className='text-center mt-4'>Pradhan Mantri Gram Sadak Yojna</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>State</th>
              <th>Project Proposal Considered</th>
              <th>Physical Progress Sanctioned</th>
              <th>Physical Progress Grounded</th>
              <th>Physical Progress Completed</th>
              <th>Financial Progress Investment</th>
              <th>Central Assistance Sanctioned</th>
              <th>Central Assistance Released</th>
            </tr>
          </thead>
          <tbody>
            { console.log("API",dataapi) }
            
            { dataapi.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.State.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.State}</td>
                  <td>{item.ProjectProposalConsidered}</td>
                  <td>{item.PhysicalProgressSanctioned}</td>
                  <td>{item.PhysicalProgressGrounded}</td>
                  <td>{item.PhysicalProgressCompleted}</td>
                  <td>{item.FinancialProgressInvestment}</td>
                  <td>{item.CentralAssistanceSanctioned}</td>
                  <td>{item.CentralAssistanceReleased}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
    </>
  );
}
  

export default States