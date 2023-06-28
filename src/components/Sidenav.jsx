import React from "react";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Tooltip from "@mui/material/Tooltip";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./Sidenav.css";
import { Link } from "react-scroll";








const Sidenav = () => {


  return (
    <Box
      sx={{
        marginLeft: 30 + "px",
        width: 50 + "px",
        height: 250 + "px",
        position: "fixed",
        '@media (max-width: 861px)': {
            position:'relative',
          }
      }}
    >
      <Card
        variant="outlined"
        style={{
          alignItems: "center",
          height: 45 + "vh",
          borderRadius: "25px",
          backgroundColor: "#1D1B1D",
          border: "solid",
          borderColor: "white",
          borderWidth: 0.001 + "rem",
          marginTop: 6 + "rem",
        }}
      >
        <CardContent>
          <div className="navcontainer">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <Tooltip title="Home" placement="left">
              <Button
                sx={{ marginLeft: "-15px" }}
                variant="outline"
                startIcon={<HomeIcon sx={{ color: "white", mt: "25px" }} />}
              ></Button>
            </Tooltip>
            </Link>

            <Link to="skillSec" spy={true} smooth={true} offset={-540} duration={500}>
            <Tooltip title="Skills" placement="left">
              <Button
                sx={{ marginLeft: "-15px" }}
                variant="outline"
                startIcon={
                  <PsychologyIcon sx={{ color: "white", mt: "15px" }} />
                }
              ></Button>
            </Tooltip>
            </Link>

            <Link to="serviceSec" spy={true} smooth={true} offset={-100} duration={500}>
            <Tooltip title="Services" placement="left">
              <Button
                sx={{ marginLeft: "-15px" }}
                variant="outline"
                startIcon={
                  <MiscellaneousServicesIcon
                    sx={{ color: "white", mt: "15px" }}
                  />
                }
              ></Button>
            </Tooltip>
            </Link>

            <Link to="portfolioSec" spy={true} smooth={true} offset={-100} duration={500}>
            <Tooltip title="Portfolio" placement="left">
              <Button
                sx={{ marginLeft: "-15px" }}
                variant="outline"
                startIcon={
                  <ImportantDevicesIcon sx={{ color: "white", mt: "15px" }} />
                }
              ></Button>
            </Tooltip>
            </Link>

            <Link to="workandeduSec" spy={true} smooth={true} offset={-100} duration={500}>
            <Tooltip title="Work and Education" placement="left">
              <Button 
                sx={{ marginLeft: "-15px" }}
                variant="outline"
                startIcon={<WorkIcon sx={{ color: "white", mt: "15px" }} />}
              ></Button>
            </Tooltip>
            </Link>
            <Link to="contactSec" spy={true} smooth={true} offset={-100} duration={500}>
            <Tooltip title="Contact" placement="left">
              <Button
                sx={{ marginLeft: "-15px" }}
                variant="outline"
                startIcon={
                  <AlternateEmailIcon sx={{ color: "white", mt: "15px" }} />
                }
              ></Button>
            </Tooltip>
            </Link>

           

           
         
        




          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Sidenav;
