import React from 'react'
import {AiOutlineArrowUp}from  "react-icons/ai";
function ButtonBar() {
  return (
    <div>

<div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <a className="text-primary" href="#">Doctor's</a>. </p>
                </div>
                
            </div>
        </div>
    </div>
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"> <AiOutlineArrowUp size={25}/>  </a> 
    </div>
  )
}

export default ButtonBar