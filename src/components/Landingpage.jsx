import React from "react";
import "./Landingpage.css";
import Sidebar from "./Sidebar";
import Intro from "./Intro";
import Sidenav from "./Sidenav";
import { Myskills } from "./Myskills";
import { Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Services from "./Services";
import Workandeducation from "./Workandeducation";
import Contact from "./Contact";
import { mySkill } from "../assets/Skilldata";
import { myServices } from "../assets/Servicesdata";
import Portfolio from "./Portfolio";
import mykartimg from "../assets/myportfolioMykart.png"
import game from "../assets/myportfolioGame.png";
import app from "../assets/myportfolioAndroidApp.png"
import {motion} from 'framer-motion'


const Landingpage = () => {


    let url1 = 'https://6497351594f5d80911ebe5ea--myownkart.netlify.app/'
    let url2 ='https://play.google.com/store/apps/details?id=com.skbhsiddhant.TwoCarOneBrain'
    let url3 ='https://play.google.com/store/apps/details?id=com.developersiddhantkashyap.craftywallpaper'
  return (
    <div className="hero">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="subleft">
            <div id="home">
            <Intro />

            </div>
         

          <motion.div id="skillSec" className="skillcontainer"
          
          initial = {{opacity:0,scale:0}}
          whileInView ={{opacity:1,scale:1}}
          transition={{type:"spring",duration:3,bounce:0.5}}>
            <Typography
              mt={2}
              mb={5}
              fontWeight={100}
              color={common.white}
              variant="h3"
            >
              My{" "}
              <Typography
                display={"inline"}
                fontWeight={100}
                color={"#28E98C"}
                variant="h3"
              >
                Skills
              </Typography>{" "}
            </Typography>

            <Grid container spacing={2}
          
            
            >
              {mySkill.map((val,key) => {
                return (
                  <Grid item sm={12} md={4} lg={4}>
                    <Myskills imgSrc={val.imgUrl} nameOf={val.name} />
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>

          <motion.div  id="serviceSec" className="myservicescontainer"
          initial = {{x:-300}}
          whileInView ={{x:0}}
          transition={{type:"spring",duration:2,bounce:0.5}}
          
          >
            <Typography
              mt={5}
              mb={5}
              fontWeight={100}
              color={common.white}
              variant="h3"
            >
              {" "}
              <Typography
                display={"inline"}
                fontWeight={100}
                color={"#28E98C"}
                variant="h3"
              >
                Services
              </Typography>{" "}
            </Typography>
            <Grid container spacing={2}>
              {myServices.map((val) => {
                return (
                  <Grid item xs={12}>
                    <Services title={val.title}
                        desc={val.desc}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>

          <motion.div id="portfolioSec" className="portfoliocontainer"
          
          initial = {{x:300}}
          whileInView ={{x:0}}
          transition={{type:"spring",duration:2,bounce:0.5}}
          
          
          >
            <Typography
              mt={5}
              mb={5}
              fontWeight={100}
              color={common.white}
              variant="h3"
            >
              {" "}
              <Typography
                display={"inline"}
                fontWeight={100}
                color={"#28E98C"}
                variant="h3"
              >
                Portfolio
              </Typography>{" "}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Portfolio url={url1} imgUrl={mykartimg}/>
              </Grid>
              <Grid item xs={12}>
              <Portfolio url={url2} imgUrl={game}/>
              </Grid>
              <Grid item xs={12}>
              <Portfolio url={url3} imgUrl={app}/>
              </Grid>
            </Grid>
          </motion.div>

          <div id="workandeduSec" className="workandeducontainer">
            <Typography
              mt={5}
              mb={5}
              fontWeight={100}
              color={common.white}
              variant="h3"
            >
              Work and{" "}
              <Typography
                display={"inline"}
                fontWeight={100}
                color={"#28E98C"}
                variant="h3"
              >
                Education
              </Typography>{" "}
            </Typography>

            <Workandeducation />
          </div>

          <div id="contactSec" className="contactcontainer">
            <Typography
              mt={5}
              mb={5}
              fontWeight={100}
              color={common.white}
              variant="h3"
            >
              Contact{" "}
              <Typography
                display={"inline"}
                fontWeight={100}
                color={"#28E98C"}
                variant="h3"
              >
                Me
              </Typography>{" "}
            </Typography>

            <Contact />
          </div>
        </div>

        <div className="subright">
          <Sidenav />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
