import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Information', 'Contact Details', 'Eeducational Details','Work Experience','Skills & Certification','Review & Submit'];

function UserInputs({resumeDetails,setResumeDetails}) {
  const skillSuggestionArray = ['NODE JS','ANGULAR','REACT','MONGO DB','EXPRESS JS','LEADERSHIP','COMMUNICATION','COACHING','POWER BI','MS EXCEL']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  //resume details-get fromprops
  // const [resumeDetails,setResumeDetails] = React.useState({
  //   username:'',
  //   jobtitle:'',
  //   location:'',
  //   email:'',
  //   mob:'',
  //   git:'',
  //   linkedin:'',
  //   portfolio:'',
  //   course:'',
  //   college:'',
  //   university:'',
  //   passout:'',
  //   intern:'',
  //   companyname:'',
  //   companylocation:'',
  //   duration:'',
  //   userskill:[],
  //   summary:''
  // })

  const skillRef = React.useRef()

  //to navigate
  const navigate = useNavigate()


  console.log(resumeDetails);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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

  const renderSteps = (stepCount)=>{
    switch(stepCount){
        case 0: return (
            <div>
                <h3>Personal Details</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="FullName" variant="standard" />
                    <TextField value={resumeDetails.jobtitle} onChange={e=>setResumeDetails({...resumeDetails,jobtitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                </div>
            </div>
        )
        case 1: return (
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
        )
        case 2: return (
            <div>
                <h3>Educational Details</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                    <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                    <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                    <TextField value={resumeDetails.passout} onChange={e=>setResumeDetails({...resumeDetails,passout:e.target.value})} id="standard-basic-passout" label="Year Of Passout" variant="standard" />
                </div>
            </div>
        )
        case 3: return (
            <div>
                <h3>Professional Details</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.intern} onChange={e=>setResumeDetails({...resumeDetails,intern:e.target.value})} id="standard-basic-intern" label="Job or Internship" variant="standard" />
                    <TextField value={resumeDetails.companyname} onChange={e=>setResumeDetails({...resumeDetails,companyname:e.target.value})} id="standard-basic-companyname" label="Company Name" variant="standard" />
                    <TextField value={resumeDetails.companylocation} onChange={e=>setResumeDetails({...resumeDetails,companylocation:e.target.value})} id="standard-basic-companylocation" label="Company Location" variant="standard" />
                    <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                </div>
            </div>
        )
        case 4: return (
            <div>
                <h3>Skills</h3>
                <div className="d-flex align-items-center justify-content-between p-3 w-100">
                  <input ref={skillRef} placeholder='Add skills' type="Add " className='form-control' />
                    <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                <h5>Suggestions :</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    skillSuggestionArray.map((item,index)=>(
                      <Button onClick={()=>addSkill(item)} key={index} variant="outlined" className='m-2'>{item}</Button>
                    ))
                  }
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
        )
        case 5: return (
            <div>
                <h3>Summary</h3>
                <div className="p-3 row">
                  <TextField id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={7} defaultValue={'Highly motivated MEARN Stack Developer skilled in building dynamic, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in both front-end and back-end development, RESTful API integration, and modern UI frameworks. Strong understanding of JavaScript, CRUD operations, authentication, and version control with Git. Passionate about clean code, user-friendly design, and continuous learning to adopt new technologies.'} />
                </div>
            </div>
        )
        default : return null
    }
  }

  const handleAddResume = async ()=>{
    const {username,jobtitle,location} = resumeDetails
    if(!username && !jobtitle && !location){
      alert("Please fill the form completely!!!")
    }else{
      console.log("API call");
      try{
       const result = await addResumeAPI(resumeDetails)
     
       
       if(result.status==201){
        alert("Resume added successfully")
        const {id} = result.data
        //success redirect view page
        navigate(`/resume/${id}/view`)
       }
       
      }catch(error){
        console.log(error);
        
      }
      
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed 
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {/* render contents according to step */}
            <Box>
                {renderSteps(activeStep)}
            </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {
            activeStep === steps.length - 1 ?
            <Button onClick={handleAddResume}>Finish</Button> :
            <Button onClick={handleNext}>Next</Button>
            }  
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInputs