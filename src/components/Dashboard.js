import React from 'react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useStyles } from "./utils";
import Navbar from '../component/mainnav'
import '../jcss/Dashboard.css'

import Sidebar from '../component/sidenav';
import Dashcenter from './dashcenter';

function Dashboard(){
    
   return (
    <React.Fragment>
      <header>
        <Navbar/>
      </header>
      <Sidebar/>
      <main className='main'>
        <Sidebar/>
        <Dashcenter/>

      </main>
    </React.Fragment>


   );
}

export default Dashboard