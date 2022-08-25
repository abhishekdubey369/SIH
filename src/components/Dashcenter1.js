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
// import states from '../Images/states.jpg'
import Visual from '../assets/visualization.png';
import Sicg from '../assets/SICG.png'
import '../jcss/Dashboard.css'

import { Link } from 'react-router-dom';

function Dashcenter1(props){
    const classes = useStyles();
    return(
        <div className="main">
            <div className={classes.cardHolder}>

<Card className="Card"
sx={{ minWidth:300, maxWidth: 400  }}>
    <CardMedia
      component="img"
      height="140"
      width="50"
      image={Visual}
      alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        VISUALIZATION
      </Typography>
      <Typography variant="body2" color="text.secondary">
        VISUALIZATION
      </Typography>
      
    </CardContent>

    <CardActions>
      <Button
            width='200px'
            padding='10px'
            LinkComponent={Link}
            to='/chart'
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >VISUALIZATION</Button>
      </CardActions>
      </Card>
    

      <Card className="Card"
sx={{ minWidth:300, maxWidth: 400  }}>
    <CardMedia
      component="img"
      height="140"
      width="50"
      image={Sicg}
      alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        SIC
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Reports
      </Typography>
      
    </CardContent>

    <CardActions>
      <Button
            width='200px'
            padding='10px'
            LinkComponent={Link}
            to='/SIC'
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >SIC</Button>
      </CardActions>
      </Card>
    
</div>
</div>
)
}

export default Dashcenter1;