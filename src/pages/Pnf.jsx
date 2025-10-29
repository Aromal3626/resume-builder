import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <img width={'80%'} src="https://webartdevelopers.com/blog/wp-content/uploads/2018/10/HTML-404-Page.gif" alt="page not found" />
        <h1>404!</h1>
        <h4>Page Not Found</h4>
        <Link className='btn btn-primary' to={'/'}>Go To Home</Link>
    </div>
  )
}

export default Pnf