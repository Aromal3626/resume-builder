import React, { useEffect, useState } from 'react'
import Preview from "../components/Preview"
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { MdEditDocument, MdFileDownload } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdArrowBack, IoMdRefreshCircle } from "react-icons/io";
import { FaFileDownload } from 'react-icons/fa';
import { FaBackward } from 'react-icons/fa6';
import Edit from '../components/Edit';

function ViewResume() {
  const {id} = useParams()
  console.log(id);
  
  const [resume,setResume] = useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async ()=>{
    const result = await getResumeAPI(id)
    console.log(result);
    if(result.status==200){
      setResume(result.data)
    } 
  }
  return (
    <>
    
    <div className="">
        <div className="row container">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button className='btn fs-4 text-primary'><FaFileDownload/></button>
              <Edit resumeDetails={resume} setResumeDetails={setResume} />
                <Link to={'/history'} className='btn fs-3 text-primary'><IoMdRefreshCircle/></Link>
                <Link to={'/resume'} className='btn fs-3 text-success'><FaBackward/></Link>
              </div>
                <Preview resumeDetails={resume}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    
    </>
  )
}

export default ViewResume