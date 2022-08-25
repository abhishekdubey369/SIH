import React from 'react';
import './sidenav.css';
import {Link} from 'react-router';
import UIcon from '@mui/icons-material/UnfoldLessDouble';
import HIcon from '@mui/icons-material/HomeWork';
import CIcon from '@mui/icons-material/Contacts';
import PIcon from '@mui/icons-material/PeopleAlt';
import AIcon from '@mui/icons-material/Accessible';
import AdIcon from '@mui/icons-material/AddLink';
import PeIcon from '@mui/icons-material/PersonPin';
import AsIcon from '@mui/icons-material/Assessment';

const sidebar = [
    {
        item:"Home",
        icon:<HIcon/>,
        Link:"/"
    },
    {
        item:"About",
        icon:<UIcon/>,
        Link:"/"
    },
    {
        item:"Contact",
        icon:<CIcon/>,
        Link:"/"
    },
    {
        item:"Add",
        icon:<PIcon/>,
        Link:"/"
    },
    {
        item:"Help",
        icon:<AIcon/>,
        Link:"/"
    },
    {
        item:"links",
        icon:<AdIcon/>,
        Link:"/"
    },
    {
        item:"MyProfile",
        icon:<PeIcon/>,
        Link:"/"
    },
];

function Sidebar(){
    
const sidebar = [
    {
        item:"Home",
        icon:<HIcon/>,
        Link:"/"
    },
    {
        item:"visual",
        icon:<UIcon/>,
        Link:"/chart"
    },
    {
        item:"Contact",
        icon:<CIcon/>,
        Link:"/contact"
    },
    {
        item:"Add",
        icon:<PIcon/>,
        Link:"/data"
    },
    {
        item:"Help",
        icon:<AIcon/>,
        Link:"/Help"
    },
    {
        item:"links",
        icon:<AdIcon/>,
        Link:"/links"
    },
    {
        item:"MyProfile",
        icon:<PeIcon/>,
        Link:"/myprofile"
    },
    {
        item:"Reports",
        icon:<AsIcon/>,
        Link:"/SIC"
    },
];
    return(
        <div className='sidebar'>
            <ul 
            className='sidebarlist'>
            {sidebar.map((val,key)=>{
                return(
                    <li 
                     id={window.location.pathname == val.link?"active":""}
                     key={key} onClick={()=>{window.location.pathname = val.Link}}>
                        {""}
                        <div>{val.icon}</div>
                        <div>{val.item}</div>
                    </li>
                    
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar;