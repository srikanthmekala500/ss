import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import images2  from '../imges/test3.png' 
 


const Header = () => {
  
 
  // const hnadlelogout =()=>{
  //   //logout clear the data
  //   setAuth({
  //     ...auth,
  //     user:null,
  //     token:''
  //   })
  //   localStorage.removeItem("auth")
  //   toast.success("Logout Succefully")
  // }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink 
    className="navbar-brand" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '20px' }}
    to="/bet"> Bacterial Endotoxin Test Dilution
    <img src={images2} alt="" width="30" height="50"  ></img>   </ NavLink >
       <div className= "container-center"  >
       {/* <Serach  /> */}
       </div>
       
    
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        
          <NavLink 
          to='/bet'
          className="nav-link active" 
          >Home
          </NavLink>
         
        </li>
        <li className="nav-item">
     
       
        </li>
       
      
       
       </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header