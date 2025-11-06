import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div style={{margin:'80px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>{resumeDetails?.username}</h3>
      <h4>{resumeDetails?.jobtitle}</h4>
      <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.mob}</span></h6>
      <p className="my-3">
        <a href={resumeDetails?.git} target='_blank'>GITHUB</a>|
        <a href={resumeDetails?.linkedin} target='_blank'>LINKEDIN</a>|
        <a href={resumeDetails?.portfolio} target='_blank'>PORTFOLIO</a>
      </p>

      <Divider sx={{fontSize:'25px'}}>SUMMARY</Divider>
      <p style={{textAlign:'justify'}}>Highly motivated MEARN Stack Developer skilled in building dynamic, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in both front-end and back-end development, RESTful API integration, and modern UI frameworks. Strong understanding of JavaScript, CRUD operations, authentication, and version control with Git. Passionate about clean code, user-friendly design, and continuous learning to adopt new technologies.</p>

      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>EDUCATION</Divider>
      <h5 className="mt-2">{resumeDetails?.course}</h5>
      <p><span className="mx-2">{resumeDetails?.college}</span>|<span className="mx-2">{resumeDetails?.university}</span>|<span className="mx-2">{resumeDetails?.passout}</span></p>

      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>PROFESSIONAL EXPERIENCE</Divider>
      <h5 className="mt-2">{resumeDetails?.intern}</h5>
      <p><span className="mx-2">{resumeDetails?.companyname}</span>|<span className="mx-2">{resumeDetails?.companylocation}</span>|<span className="mx-2">{resumeDetails?.duration}</span></p>

      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>SKILLS</Divider>
      <div className="d-flex flex-wrap justify-content-between">
        {
          resumeDetails?.userskill?.map((item,index)=>(
            <Button variant='contained' className='m-1'>{item}</Button>
          ))
        }
      </div>
    </div>
  )
}

export default Preview