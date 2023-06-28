import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Profile from "./Profile";
import { Link } from "react-scroll";


const Sidebar = () => {
  return (
  
      <Box sx={{ minWidth: 275 ,height:500+"px",position:"fixed",  '@media (max-width: 861px)': {
        position:'relative',
      },}}>
        <Card variant="outlined" style={{height:80+"vh",borderRadius:"25px",backgroundColor:"#1D1B1D",border:"solid",borderColor:"white",borderWidth:0.001+"rem"}}>
          <CardContent>
            

                    <Profile/>


          </CardContent>
          <CardActions>
          <Link style={{marginLeft:"auto",marginRight:"auto"}} to="contactSec" spy={true} smooth={true} offset={-100} duration={500}>
          <Button style={{ width:"10rem",marginTop:"30px",marginLeft:"auto" ,marginRight:"auto",color:"black" ,backgroundColor:"#28E98C", borderRadius: 12+"px"}}  variant="contained">Hire ME!</Button>
          </Link>
          </CardActions>
        </Card>
      </Box>
    
  );
};

export default Sidebar;
