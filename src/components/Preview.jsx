import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{margin:'80px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h4>Job Title</h4>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E-Mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p className="my-3">
        <a href="" target='_blank'>Github</a>|
        <a href="" target='_blank'>Linkedin</a>|
        <a href="" target='_blank'>Portfolio</a>
      </p>

      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque rem quos eligendi natus accusantium optio obcaecati enim quis! Officia, nostrum? Dolores commodi quia animi soluta ad repellendus hic ducimus dicta.</p>

      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
      <h5 className="mt-2">Course Name</h5>
      <p><span className="mx-2">College</span>|<span className="mx-2">University</span>|<span className="mx-2">Passout Year</span></p>

      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Profeesional Experience</Divider>
      <h5 className="mt-2">Job / Intrenship</h5>
      <p><span className="mx-2">Company Name</span>|<span className="mx-2">Company Location</span>|<span className="mx-2">Duration</span></p>

      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between">
        <Button variant='contained' className='m-1'>NODE JS</Button>
      </div>
    </div>
  )
}

export default Preview