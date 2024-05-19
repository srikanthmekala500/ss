import React from 'react'
import  { useState } from 'react'
 import toast from 'react-hot-toast';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth';
import Layout from '../../componets/Layout';


const Login = () => {
     const [email,setEmail]=useState('') 
    const [password,setPassowrd]= useState('')
    const navigate = useNavigate()
    const location = useLocation()
  //cutsom hook
  const [auth,setAuth]=useAuth()

  //form-sumbite
  const handlesumbite =async (e)=>{
      e.preventDefault()
    try {
         const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
          {
           
            email,
            password,
           
           } 
        )
  
      
      if(res.data.success){
        toast.success(res.data.message)
       //custom hook use 
        setAuth({
          ...auth,
          user:res.data.user,
          token :res.data.token
        })
        //data store local storage
        localStorage.setItem('auth',JSON.stringify(res.data))

        
        navigate(location.state || '/home')
      }else{
      
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  
    
  
  }


  return (
    <div>
          <Layout>
     
     <div className='register'>
     <div className='text-center'>
       <h1>Login Form</h1>
       </div>
         <form onSubmit={handlesumbite} >
            
            {/* <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text"
              value={name}
             onChange={(e)=>setName(e.target.value)}          
             className="form-control" 
             id="exampdleInputEmail1" 
             aria-describedby="emailHelp" 
             placeholder="Enter Name" 
             required
             />    
            </div> */}
 
            <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             className="form-control" 
             id="exampssleInputEmail1" 
             aria-describedby="emailHelp" 
             placeholder="Enter email" 
             required
             />    
            </div>
 
            <div className="form-group mb-3">
            <label htmlFor="exampssleInputPassword1">Password</label>
            <input 
            type="password"
            value={password}
            onChange={(e)=>setPassowrd(e.target.value)}
            className="form-control" 
            id="exampsssleInputPassword1"
            placeholder="Password" 
            required
            />
            
            </div>
{/*  
            <div className="form-group mb-3">
            <label htmlFor="exsssampleInputEmail1">Phone</label>
            <input type="phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
             className="form-control" 
             id="exampleInputEmail1" 
             aria-describedby="emailHelp" 
             placeholder="Phone" 
             required
             />    
            </div>
 
            <div className="form-group mb-3">
            <label htmlFor="exassssmpleInputEmail1">Address</label>
            <input type="phone"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
             className="form-control" 
             id="exampsssssleInputEmail1" 
             aria-describedby="emailHelp" 
             placeholder="Enter Address" 
             required
             />    
            </div> */}
            
            <button type="submit" className="btn btn-primary">Login</button>
            <button 
             
                type="button" 
                onClick={()=>navigate('/forgotpassword')}
               me="bt classNan btn-primary ms-3"
                >Forgot Password
                </button>
         </form>
 
         <div className="form-group mb-" >
              
            </div>
{/* ssssssssssssssssssssssssss */}
 

 
    {/* ssssssssssssssssssssssssssssssss */}
     </div>
     </Layout>
    </div>
  )
}

export default Login