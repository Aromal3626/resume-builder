import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    // landing page
    <div>
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?semt=ais_hybrid&w=740&q=80')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className="container-fluid row align-items-center">
      <div className="row">
        <div className="col-md-4"></div>
        <div className='col-md-4 shadow border py-5 rounded mt-5 text-center' style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
          <h3>Designed to get hired.
            Your skill, your story, your next job - all i one.
          </h3>
          <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'purple'}}>Make your Resume</Link> 
        </div>
        <div className='col-md-4'></div>
      </div>
      </section>

      {/* tools */}
      <section className="m-5">
        <h1 className="text-center">Tools</h1>
        <div className="contaner row align-item-center">
          <div className="col-md-6">
            <div className="my-3">
              <h4>Resume</h4>
              <p>Create unlimited new resumes and easily edit them afterwards</p>
            </div>
            <div className="my-3">
              <h4>Cover Letters</h4>
              <p>Easily write proffessional cover letters </p>
            </div>
            <div className="my-3">
              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job posting </p>
            </div>
            <div className="my-3">
              <h4>Application</h4>
              <p>Effortlessly manage and track your job applications in an organized manner  </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png " alt="resume" />
          </div> 
        </div>
      </section>

      {/* image */}
      <section style={{height:'700px',width:'100%',backgroundImage:'url("https://images.unsplash.com/photo-1709715357520-5e1047a2b691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000")',backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>
      </section>

      {/* testimonial */}
      <section className="m-5">
        <h1 className="text-center my-5">Testimonial</h1>
        <div className="row conatainer">
          <div className="col-md-6">
            <h3 className="my-5">Trusted by professionals worldwide</h3>
            <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-3">
                <img className='' src="https://www.profilebakery.com/wp-content/uploads/2025/01/Profilebakery18.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
    
  )
}

export default LandingPage