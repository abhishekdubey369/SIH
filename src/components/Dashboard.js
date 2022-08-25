import React from 'react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useStyles } from "./utils";
import Navbar from '../component/mainnav'
import '../jcss/Dashboard.css'

import Sidebar from '../component/sidenav';
import Dashcenter from './dashcenter';
import { Table } from '@mui/material';
import Dashcenter1 from './Dashcenter1';
import Marquee from 'react-fast-marquee';

function Dashboard(){
    
   return (
    <React.Fragment>
      <header>
        <Navbar/>
      </header>
      <main className='main'>

        <Table className='table'>
          <tbody>
            <td>
              <tr>
              <Sidebar/>
              </tr>
            </td>
          <td>
          <tr><Marquee pauseOnHover="true" pauseOnClick="true">Dashboard</Marquee></tr>
          <tr><Dashcenter/></tr>
          <tr><Dashcenter1/></tr>
          </td>
          </tbody>
        </Table>

      </main>
    </React.Fragment>


   );
}

export default Dashboard