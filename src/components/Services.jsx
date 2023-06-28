import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Services = (props) => {
  return (
    <>
    <div id='services'>
    <Card  variant='outlined' style={{height:13+"rem",borderRadius:"25px",backgroundColor:"#1D1B1D",border:"solid",borderColor:"white",borderWidth:0.001+"rem"}}>
      <CardActionArea sx={{textAlign:"center",mt:"2rem"}}>
       
        <CardContent>
          <Typography sx={{textAlign:"center",color:"white"}} gutterBottom variant="h5" component="div">
           {props.title}
          </Typography>
          <Typography sx={{textAlign:"center",color:"white",fontWeight:"200"}} gutterBottom variant="subtitle1" component="div">
           {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  )
}

export default Services