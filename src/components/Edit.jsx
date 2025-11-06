import React, {useState,useRef} from 'react'
import { MdModeEdit } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDetails,setResumeDetails}) {
    const [open,setOpen] = useState(false)
    const skillRef = useRef()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = (skill)=>{
    if(resumeDetails.userskill.includes(skill)){
      alert("Given skill already added, please add another")
    }
    else{
      setResumeDetails({...resumeDetails,userskill:[...resumeDetails.userskill,skill]})
      skillRef.current.value = ""
    }

  }

  const removeSkill = (skill)=>{
    setResumeDetails({...resumeDetails,userskill:resumeDetails.userskill.filter(item=>item!=skill)})

  }

  return (
    <div>
        <button onClick={handleOpen} className='btn fs-3 text-warning'><MdEditDocument/></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit resume details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal data */}
            <div>
                <h3>Personal Details</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="FullName" variant="standard" />
                    <TextField value={resumeDetails.jobtitle} onChange={e=>setResumeDetails({...resumeDetails,jobtitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                </div>
            </div>

            {/*Contact details */}
            <div>
                <h3>Contact Details</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                    <TextField value={resumeDetails.mob} onChange={e=>setResumeDetails({...resumeDetails,mob:e.target.value})} id="standard-basic-mob" label="Phone Number" variant="standard" />
                    <TextField value={resumeDetails.git} onChange={e=>setResumeDetails({...resumeDetails,git:e.target.value})} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                    <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkdin" label="Linkedin Profile Link" variant="standard" />
                    <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            </div>

            {/*Educational details*/}
            <div>
                  <h3>Educational Details</h3>
                  <div className='row p-3'>
                      <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                      <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                      <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                      <TextField value={resumeDetails.passout} onChange={e=>setResumeDetails({...resumeDetails,passout:e.target.value})} id="standard-basic-passout" label="Year Of Passout" variant="standard" />
                  </div>
              </div>

              {/*Professional details */}
              <div>
                    <h3>Professional Details</h3>
                    <div className='row p-3'>
                        <TextField value={resumeDetails.intern} onChange={e=>setResumeDetails({...resumeDetails,intern:e.target.value})} id="standard-basic-intern" label="Job or Internship" variant="standard" />
                        <TextField value={resumeDetails.companyname} onChange={e=>setResumeDetails({...resumeDetails,companyname:e.target.value})} id="standard-basic-companyname" label="Company Name" variant="standard" />
                        <TextField value={resumeDetails.companylocation} onChange={e=>setResumeDetails({...resumeDetails,companylocation:e.target.value})} id="standard-basic-companylocation" label="Company Location" variant="standard" />
                        <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                    </div>
                </div>

                {/*Skill */}
                 <div>
                <h3>Skills</h3>
                <div className="d-flex align-items-center justify-content-between p-3 w-100">
                  <input ref={skillRef} placeholder='Add skills' type="Add " className='form-control' />
                    <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                <h5>Added Skills :</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    resumeDetails.userskill?.length>0?
                    resumeDetails.userskill?.map((skill,index)=>(
                      <Button key={index} variant='contained' className='m-1'>{skill}<FaXmark onClick={()=>removeSkill(skill)} className='ms-2'/></Button>
                    ))
                    :
                    <p className=''>No skills are added yet.</p>
                  }
                </div>
            </div>
            <div className="my-3">
              <button className='btn btn-warning text-light'>Update</button>
            </div>
          </Box>
        </Box>
      </Modal>

    </div>
  )
}

export default Edit