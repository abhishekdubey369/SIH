import React from "react";
import '../jcss/Dashboard.css'

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useStyles } from "./utils";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import states from '../assets/state.png'
import Img from '../assets/district.png'
import '../jcss/Dashboard.css'

import { Link } from 'react-router-dom';

function Dashcenter(props){
    const classes = useStyles();
    return(
        <div className="main">
            <div className={classes.cardHolder}>

<Card className="Card"
sx={{ minWidth:300, maxWidth: 400, }}>
    <CardMedia
      component="img"
      height="140"
      width="50"
      image={states}
      alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        States
      </Typography>
      <Typography variant="body2" color="text.secondary">
        states
      </Typography>
      
    </CardContent>

    <CardActions>
      <Button
            width='200px'
            padding='10px'
            LinkComponent={Link}
            to='/policydd'
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >States</Button>
      </CardActions>
      </Card>
    

      <Card className="Card"
sx={{ minWidth:300, maxWidth: 400  }}>
    <CardMedia
      component="img"
      height="140"
      width="50"
      image={Img}
      alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Districts
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Districts
      </Typography>
      
    </CardContent>

    <CardActions>
      <Button
            width='200px'
            padding='10px'
            LinkComponent={Link}
            to='/searchDistrict'
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >District</Button>
      </CardActions>
      </Card>
    
</div>
</div>
)
}

export default Dashcenter;