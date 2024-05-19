import React, { useState } from 'react'
import toast from 'react-hot-toast';

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../../componets/Layout';





const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('') 
  const [password,setPassowrd]= useState('')
  const [address,setAddress]=useState('')
  const [phone,setPhone]=useState('')
  const [answer,setAnswer]=useState('')
const navigate = useNavigate()

//form-sumbite
const handlesumbite =async (e)=>{
    e.preventDefault()
  try {
       const res = await axios.post(
      "http://localhost:8000/api/v1/user/register",
        {
          name ,
          email,
          password,
          phone,
          address,
          answer
         } 
      )

    
    if(res.data.success){
      
      toast.success(res.data.message)
      navigate('/login')
    }else{
    
      toast.error(res.data.message)
    }
    
  } catch (error) {
    console.log(error)
    toast.error("Something went wrong")
  }

  

}







  return (
    <Layout >
     
    <div className='register'>
    <div className='text-center'>
      <h1> Register Form</h1>
      </div>
        <form onSubmit={handlesumbite} >
           
           <div className="form-group mb-3">
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
           </div>

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

           </div>
           <div className="form-group mb-3">
           <label htmlFor="exassssmpleInputEmail1">your Best Friend Name</label>
           <input type="phone"
           value={answer}
           onChange={(e)=>setAnswer(e.target.value)}
            className="form-control" 
            id="exampsssssleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter Address" 
            required
            />    
           </div>
           
           <button type="submit" className="btn btn-primary">Submit</button>
        </form>





  
        <div className="form-check">
           {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
           <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
           </div>
    </div>
    </Layout>
  )
}

export default Register