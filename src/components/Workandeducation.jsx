import React from 'react'
import { VerticalTimelineElement,VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase , faGraduationCap,faSchool } from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@mui/material'


const Workandeducation = () => {
  return (
    <>
    <div className='experience' id='workandexp'>
        <VerticalTimeline lineColor='#28E98C'>
            <VerticalTimelineElement className='verticle-timeline-element--education'
            iconStyle={{background:"#000000" ,color:"#ffe6e6"}}
            icon={<FontAwesomeIcon icon={faBriefcase} beatFade />}
            
            >
           <Typography  variant='h5' fontWeight={200}>
            Globallogic

           </Typography>
           <Typography  variant='h6' fontWeight={100}>
            FullStack Developer

           </Typography>
           <Typography  variant='subtitle2' fontWeight={100}>
            2023-present

           </Typography>
           
            </VerticalTimelineElement>
            


            <VerticalTimelineElement className='verticle-timeline-element--education'
            iconStyle={{background:"#000000" ,color:"#ffe6e6"}}
            icon={<FontAwesomeIcon icon={faGraduationCap} bounce />}
            
            >
           <Typography  variant='h5' fontWeight={200}>
            CMR instituate of Technology

           </Typography>
           <Typography  variant='h6' fontWeight={100}>
            BE in Information Science

           </Typography>
           <Typography  variant='subtitle2' fontWeight={100}>
            2019-2023

           </Typography>
           
            </VerticalTimelineElement>


            <VerticalTimelineElement className='verticle-timeline-element--education'
            iconStyle={{background:"#000000" ,color:"#ffe6e6"}}
            icon={<FontAwesomeIcon icon={faSchool} shake />}
            
            >
           <Typography  variant='h5' fontWeight={200}>
           Kendriya Vidyalaya M E G Center

           </Typography>
           <Typography  variant='h6' fontWeight={100}>
           PCMC

           </Typography>
           <Typography  variant='subtitle2' fontWeight={100}>
            2016-2018

           </Typography>
           
            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>
    </>
    
  )
}

export default Workandeducation