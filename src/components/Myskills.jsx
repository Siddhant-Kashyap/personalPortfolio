import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Myskill.css"

export const Myskills = (props) => {
  return (
    <>
    <div id='myskill'>


    <Card  variant='outlined' style={{width:15+"rem",height:15+"rem",borderRadius:"100px",backgroundColor:"#1D1B1D",border:"solid",borderColor:"white",borderWidth:0.001+"rem"}}>
      <CardActionArea sx={{textAlign:"center",mt:"2rem"}}>
        <img src={props.imgSrc} width={140} height={140} alt='skillPhoto'/>
        <CardContent>
          <Typography sx={{textAlign:"center",color:"white"}} gutterBottom variant="h5" component="div">
          {props.nameOf}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
         )

}
