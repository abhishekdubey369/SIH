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
]

function Sidebar(){
    return(
        <div>

        </div>
    )
}

export default Sidebar;