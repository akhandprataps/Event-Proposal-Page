import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import { useNavigate } from "react-router-dom";

function Userhome() {

  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });

  return (
    <div>
        <Home/>
       
        <div className="form-box">
          <div className="top">
          <Link to="/" style={{textDecoration:'none', marginTop:'15px'}}>Vendor</Link>
            <p style={{}}>User</p>
          </div>
          <div className="heading">
            <h2>Sign in your Account</h2>
          </div>
          <div className="form">
            <form method="post"  >
              <div className="input">
           
                <input type="name" placeholder="Phone/Email" style={{width:'300px'}} name="email" />{" "}
              </div>
              <div className="input">
             
                <input type="password" placeholder="Password" style={{width:'300px'}} name="password"  />{" "}
              </div>
              <div className="forget">
              
                <Link to="/forgetPassword" style={{textDecoration:'none'}}>Forget Password</Link>
              </div>

              <div className="footer">
                <div className="create">
                </div> 
              </div>
            </form>
          </div>
        </div>
    </div>
  )
  }

export default Userhome





 