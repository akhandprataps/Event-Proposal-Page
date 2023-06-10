import React from "react";
import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Vendorhome.css";
import Home from "../Home/Home";
import Userhome from "../User/Userhome";
import { useNavigate } from "react-router-dom";

function VendorHome() {

  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });
 
  const {email,password} = formData
  function updateData(e,propName){
    let temp=e.target.value
    setFormData(data =>({
     ...data,[propName]:temp
    }))
    
     }

  async function submitted(e){
    e.preventDefault()
    // const data=new FormData(e.target)
    console.log(formData)
   }

    return (<>
        <Home/>
   
        <div className="Text">TEXT WILL<br/> BE DISPLAYED<br/> HERE</div>
        <div className="form-box">
          <div className="top">
            <p className="vendor">Vendor</p>
            <Link to="/User" style={{textDecoration:'none', marginTop:'15px'}}>User</Link>
          </div>

          <div className="heading">
            <h2>Sign in your Account</h2>
          </div>
          <div className="form">
            <form method="post"  onSubmit={submitted}>
              <div className="input">
         
                <input type="email" placeholder="Phone/Email" style={{width:'300px'}} name="email" onChange={e=>updateData(e,"email")} required/>{" "}
              </div>
              

              <div className="footer">
                <div className="create">
         
                  <Link to="/createvendoraccount" style={{textDecoration:'none'}}>Create Account</Link>{" "}
                </div>
              
                <button className="button" type="submit">
                  SIGN IN
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

export default VendorHome;
