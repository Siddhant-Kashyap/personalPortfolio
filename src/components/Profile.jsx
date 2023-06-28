import React from 'react'
import logo from "../assets/logo (2).png"
import "./Profile.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';


const Profile = () => {

    let twitterURL="https://twitter.com/_devSid";
    let LinkedInUrl ="https://www.linkedin.com/in/itsmesid/";
    let GithubUrl ="https://github.com/Siddhant-Kashyap";
    let Website="#"




  return (
    <>
    <div  className='container'>
   <img src={logo} width={50} height={50} alt='logo'  />
   <div className='pic'>
    {/* <img  className="ppic" src={ppic} width={128} height={128}/> */}
   </div>
   <div className='naming'>
   <h2 className='name'>Siddhant Kashyap</h2>
   <h3 className='name'>Based in Bangalore,IN</h3>
   <p style={{color:"#E0E1E4"}}> ©2023 SID. All Right Reserved</p>
   <div className='panel'>
    <Button href={twitterURL} target='_blank' variant='outline' startIcon={ <TwitterIcon style={{scale:"1.5",margin:"10px", color: '#28E98C' }}/>}></Button>
    <Button href={Website}  variant='outline' startIcon={  <LanguageIcon style={{ scale:"1.5",margin:"10px",color: '#28E98C' }}/>}></Button>
    <Button href={LinkedInUrl} target='_blank' variant='outline' startIcon={ <LinkedInIcon style={{ scale:"1.5",margin:"10px",color: '#28E98C' }}/>}></Button>
    <Button href={GithubUrl} target='_blank' variant='outline' startIcon={ <GitHubIcon   style={{ scale:"1.5",margin:"10px",color: '#28E98C' }}/>}></Button>
    
   
   
    
    


   </div>

   </div>


    </div>
    
    
    </>
  )
}

export default Profile