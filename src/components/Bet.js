import React, { useState } from 'react'
 
import axios from 'axios'
import { Card } from 'antd'
import Layout from './Layout';
import {   Form, Input,   } from 'antd';
import { URL } from './apiURL';
import { useNavigate } from 'react-router-dom'

const Bet = () => {
  const navigate = useNavigate()
   const [Product_Name,setProduct_Name] =useState('')
   const [Endotoxin_Limit,setEndotoxin_Limit] =useState('')
   const [Potency_of_Product,setPotency_of_Product] =useState('')
   const [lysate,setlysate] =useState('')

   const [result ,setResult]=useState('')
   const [result1 ,setResult1]=useState('')
   const [result2 ,setResult2]=useState('')
   const [result3 ,setResult3]=useState('')
   const [result4 ,setResult4]=useState('')
   
    const handlesumbite =async (e)=>{
        e.preventDefault()
      try {
           const res = await axios.post(
          `${URL}/api/v1/user/BET`,
          {
            Product_Name,
            Endotoxin_Limit,
            Potency_of_Product,
            lysate,
            result,
            result1,
            result2,
            result3,
            result4,
          
         },
         
          )
          console.log(res)
         
        if(res.data.success){
          
          
          navigate('/dilution ')
        
        }else{
        
          toast.error(res.data.message)
        }

       
                
 
      } catch (error) {
        console.log(error)
     
      }
    
      
    
    }
  
 
   
const show = () => {
  try {
    let Total = Endotoxin_Limit * Potency_of_Product;
    let MVD = Total / lysate;
 
    
    let nextNumber = (n) => {
      return n * 2;
    };
    
    const series = [2];
    const mvds = [];
    const mvdss = [];
    const dilution = [];
   
    
    for (let i = 0; i < 100; i++) {
      series.push(nextNumber(series[i]));
      let total = MVD / series[i];
      
      if (total > 1) { // If the dilution is greater than 1
        mvds.push(total.toFixed(2));
        mvdss.push(series[i]); 
        
        // Calculate and store the dilution only for values less than 6
        if (parseFloat(mvds[i]) < 6) {
          dilution.push(`${mvdss[i]}`, `${(total).toFixed(2)}`);
        }
      }
    }
    
   
  
     let MVDvalues =  mvdss
     let MVDvalues1 = mvds.reverse()
     let MVDvalues2 =  dilution.filter((_, index) => index % 2 === 0)
     let  MVDvalues3 = dilution.filter((_, index) => index % 2 !== 0)
     let MVDvalues4=  mvdss.reverse()
    //  let sree = MVDvalues.reduce((a, v) => ({ ...a, [v]: v}), {}) 
     
    
     setResult(MVDvalues)
     setResult1(MVDvalues1)
     setResult2(MVDvalues2)
     setResult3(MVDvalues3)
     setResult4(MVDvalues4)
    

  } catch (error) {
    console.log(error);
  }
}


    return (
    <Layout>
         <div className='register'>
              <h2 className='m-5'>Bacterial Endotoxin Test Dilution</h2>
     <Card className='text-center card border-warning '>
    
               <form onSubmit={handlesumbite}  >
            
           
            <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1"><h5>Product_Name</h5></label>
            <input type="text"
             
             value={Product_Name}
             onChange={(e)=>setProduct_Name(e.target.value)}
             className="form-control   " 
             id="exampssleInputEmail1" 
             aria-describedby="emailHelp" 
             placeholder="Enter Product_Name  " 
             required
             />    
            </div>

            
 
            <div className="form-group mb-3 ">
            <label htmlFor="exampssleInputPassword1"><h5>Endotoxin_Limit</h5></label>
            <input 
             
            type="text"
            value={Endotoxin_Limit}
            onChange={(e)=>setEndotoxin_Limit(e.target.value)}
            className="form-control center" 
            id="exampsssleInputPassword1"
            placeholder="Enter Endotoxin_Limit" 
            required
            />
            </div>

            <div className="form-group mb-3 ">
            <label htmlFor="exampssleInputPassword1"><h5>Potency_of_Product </h5> </label>
            <Input 
              
            type="text"
            value={Potency_of_Product}
            onChange={(e)=>setPotency_of_Product(e.target.value)}
            className="form-control center" 
            id="exampsssleInputPassword1"
            placeholder="Enter potency_of_Product" 
            required
            
            />
          <Form.Item className="form-group mb-3 "  >
            <label htmlFor="exampssleInputPassword1"
            className='text-center'
           ><h5>Lysate</h5></label>
            
            <Input 
          style={{ width: 300 }}
            type="text"
            value={lysate}
            onChange={(e)=>setlysate(e.target.value)}
            className="form-control   " 
            id="exampsssleInputPassword1"
            placeholder="Enter lysate " 
            required
            />

          </Form.Item>
            </div>
            
        <button   onClick={show} className='btn btn-success'>Get Dilution</button> 
   


          
       
      
     
         </form>
       </Card>
        
 
         
     </div>
      
     



     
    </Layout>
  )
}

export default Bet
 
