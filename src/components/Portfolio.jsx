import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Portfolio = (props) => {

   
  return (
    <>
    
    <div id='portfolio'>
    <Card  variant='outlined' style={{height:17+"rem",borderRadius:"25px",backgroundColor:"#1D1B1D",border:"solid",borderColor:"white",borderWidth:0.001+"rem"}}>
      <CardActionArea href={props.url}  target="_blank" sx={{textAlign:"center",mt:"2rem"}}>
      <img src={props.imgUrl}  height={200} alt='portfolioimg'/>
        <CardContent>
          <Typography sx={{textAlign:"center",color:"white"}} gutterBottom variant="h5" component="div">
           
          </Typography>
          <Typography sx={{textAlign:"center",color:"white",fontWeight:"200"}} gutterBottom variant="subtitle1" component="div">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    </>
  )
}

export default Portfolio