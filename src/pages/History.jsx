import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { IoArrowBackCircleSharp } from 'react-icons/io5';

function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Download Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-80px'}}><IoArrowBackCircleSharp className='me- fs-1'></IoArrowBackCircleSharp>Back</Link>
      <Box component="section" className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
          <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
              <div className="d-flex justify-content-between">
                <h6>Review at: date&time</h6>
                <button className='btn text-danger fs-4'><MdDelete /></button>
              </div>
              <div className="border rounded p-3">
                <img className='img-fluid' width={'200px'} height={'500px'} src="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template5.jpg" alt="resume" />
              </div>
          </Paper>
        </div>
      </div>
      </Box>
    </div>
  )
}

export default History