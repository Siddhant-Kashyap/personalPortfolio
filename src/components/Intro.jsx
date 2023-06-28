import React from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home';
import { common } from '@mui/material/colors';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./Intro.css"

const Intro = () => {
  return (
    <>
    <div>

  
    <Button style={{ padding:"10px",width:"10rem",marginTop:"10px",marginLeft:"auto" ,marginRight:"auto" ,color:"#28E98C", borderRadius: 20+"px"}} variant="outlined" startIcon={<HomeIcon />}>
  <Typography variant='subtitle1'>
  Introduction
    </Typography>
    </Button>

    
    <Typography mt={5} fontWeight={100} color={common.white} variant="h3">Say Hello from <Typography display={"inline"} fontWeight={100} color={"#28E98C"} variant="h3">
        Siddhant Kashyap,
        
        </Typography> </Typography>

        <Typography  fontWeight={100} color={common.white} variant="h3">
        Software Developer
        </Typography> 

        <Typography mt={10} mr={10} fontWeight={300} color={common.white} variant="subtitle1">
        Passionate coder dedicated to crafting elegant and efficient solutions through clean code and continuous learning !!!
        </Typography> 

        </div>
        <div style={{
            marginTop:"100px",
            float:'right',
            marginRight:'100px'
        }}>
           
         

         <div className='rotatingbtn'>
            <Button href='https://drive.google.com/file/d/1rlKXpKBAmMJHfWgwIjXEarLF3GNFI8no/view?usp=drive_link' target='_blank' variant='outline' startIcon={ <AcUnitIcon  sx={{textAlign:"center",marginTop:"400%",color:"white"}}/>}></Button>
           

         </div>

        </div>
    
    </>
  )
}

export default Intro