import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from './Layout';
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import images1  from '../imges/test3.png' 
import { URL } from './apiURL';
import images2  from '../imges/test4.png' 

const ShowDilution = () => {
    const params = useParams()
    const navigate=useNavigate()
    const [showSecondButton, setShowSecondButton] = useState(false);
    const [usersData, setUsersData] = useState([])
    

    const [result,setResult]=useState([])
    const [result1,setResult1]=useState([])
    const [result2,setResult2]=useState([])
    const [result3,setResult3]=useState([])
    const [result4,setResult4]=useState([])
    const [store,setStore]=useState('')
    const [store1,setStore1]=useState('')
    const [images,setImages]=useState('')
    const [mvd,setMvd]=useState('')

    const [lrw,setLRW]=useState('')
    const [lrw1,setLRW1]=useState('')
    const [lrw2,setLRW2]=useState('')
    
    const [letters,setLetters] =useState()


 


     const bet_dilutionfetch = async ()=> {
        try {
            const {data} = await axios.get(`${URL}/api/v1/user/bet_ShowDilution/${params.id}`)
          console.log(data)
            if(data.success){
                setUsersData(data.ShowDilution)
                setResult(data.ShowDilution.result)
                setResult1(data.ShowDilution.result1)
                setResult2(data.ShowDilution.result2)
                setResult3(data.ShowDilution.result3)
              }
               

        } catch (error) {
            console.log(error);
        }
    };
 
   
    useEffect(()=>{
        bet_dilutionfetch()
        
    },[]);

 const handleonclike = (e)=>{
              e.preventDefault()
            
              let currentValue =  store;
              const seriesLength = 20;
              const series = [];
              const result5 =[]
              const result6=[]
              const result7=[]
              const result8=[]
              let currentValuelrw =  lrw;
            

   //MVD
            for (let i = 0; i < seriesLength; i++) {
              series.push(currentValue);
              currentValue /= 2;  
              
            
            }


            for (let i = 0; i < series.length; i++) {

              if (parseFloat(series[i]) >= 2) {

                result5.push(`${series[i]}`);

              }
              

            }
            setResult4(result5)

//////////////////////////////////////////////////////
             
            for (var i = 0; i < result4.length; i++) {
              if (i === 0) {
                result6.push(` ${parseFloat(lrw-1)}`)
                  continue; // Skip the first element
              }

              result6.push('1');
              
           }
           setLRW1(result6)
      
     



           var arrayLength = result4.length

           let Letterss =[]
           for (var m = 0; m < arrayLength; m++) {
             var letter = String.fromCharCode(65 + (m % 26));
             Letterss.push(letter);
           }

           for (var j = 0; j < result4.length;j++) {
            if (j === 0) {
              result7.push(`1 mL from tube ${Letterss[j]}`);
              continue
            }
           
            result7.push(`1 mL from tube ${Letterss[j]}`);
            // do something with sportsArr[i]
         }
         setLRW2(result7)
         console.log(result7)

         for (var p = 0; p < result4.length;p++) {
          if ( p === 0) {
      
            result8.push(`${Letterss[p]}`);
            continue
           }
         
          result8.push(`${Letterss[p]}`);
          // do something with sportsArr[i]
       }

       setLetters(result8)
      

       for (let i = 0; i < result1.length; i++) {
        console.log(lrw)
        if (result1[i] >= lrw) {
          console.log(result1[i]);
      }
   
        
        
    }
////////////////////////////////
            const numberOfTerms = result4.length; // You can change this to generate more terms if needed

            // Array to store the series
            const serieslrw = [currentValuelrw]

            // Generate the series
            for (let i =0 ; i < numberOfTerms; i++) {
                currentValuelrw *= 2;
                serieslrw.push(currentValuelrw).toFixed(2);
                 
            }
            
                 setStore1(serieslrw)
            // immage
        const array = result4 
       const imageArray = [];

  // Iterate through each value in the array
  // for (let i = 0; i < array.length; i++) {
 
    for (let j = 0; j < array.length; j++) {
      console.log(array[i])
      imageArray.push(images2);
    }
  // }fruits.splice(2, 1, "Lemon", "Kiwi");
  imageArray.splice(-2, 1, images1);
  // // Add another image
  // imageArray.push(images2);
       setImages(imageArray)         
       console.log(imageArray)    

    
}

 //mvd
 let Total = usersData.Endotoxin_Limit * usersData.Potency_of_Product;
 let MVD = Total / usersData.lysate;
//  setMvd(MVD)
 
 
 
  return (
    <Layout> 
      
      <div className="row m-2">
        <Card className="col-sm-4 mt-4 m-3 card border-info text-dark bg-light" style={{ width: 450 }}>
        {/* <Card className="row mt-6 m-6 " style={{ width: 450 }} > */}

<div className="card-header  border-info card border-info text-dark bg-light">
          <h3>Bacterial_Endotoxin  </h3>  
            </div>
            <ul className="list-group  ">
                <li className="list-group-item">  <h6> {`Product_Name :${usersData.Product_Name}`} </h6></li>
                <li className="list-group-item"><h6>Endotoxin_Limit :    {usersData.Endotoxin_Limit} </h6></li>
                <li className="list-group-item"><h6>Potency_of_Product : {usersData.Potency_of_Product}</h6></li>
                <li className="list-group-item"><h6>lysate :{usersData.lysate} </h6></li>
                <li className="list-group-item"><h4>MVD :{MVD} </h4></li>
            </ul>
             
            <button
                                        onClick={() => {
                                            navigate(`/dilution`);
                                        }}
                                        type="button"
                                        className="btn btn-success m-3"
                                    >
                                        Dilution
                                    </button>
 

      
        </Card>
        <div className="col-sm-6">
          <Card className="card col-md-5 mt-4 m-2 card border-warning " style={{ width: 700 }}>
            <div className="card-header">
                                    <h3>Select Dilution  </h3>  
                                      </div>
                                      <table className="table">
                                        <thead>
                                            <tr>
                                              <th>MDV</th>
                                              {/* <th>Add</th> */}
                                              {/* <th>Get-MVD</th> */}
                                              <th>Add-MDV </th>
                                              <th>Add</th>
                                              <th>Value-Add</th>
                                            </tr>
                                      </thead>
                                      <tbody>
                                          <td> 
                                            {result2.map((line, index) => (
                                                    <div key={index}>
                                                    <h5 class=" m-2" > {`MVD/${line}`}</h5>
                                                </div>
                                              ))}
                                          </td> 
                                        
                                          <td> 
                                          {result2.map((line, index) => (
                                                    <div key={index}>
                                                        <div>
                                              
                                                  <button type="button"
                                                  class="btn btn-info btn-sm m-1"
                                                  onClick={()=>{
                                                    setStore(line) 
                                                      
                                                    setShowSecondButton(true);
                                                  }}
                                            >Add
                                            
                                            
                                            </button>  
                                            
                                            {showSecondButton &&  <button type="button"
                                                class="btn btn-success btn-sm"
                                                onClick={handleonclike}
                                            > ClikeForResult</button>    }
                                                
                                              </div>
                                                    
                                                </div>
                                              ))}
                                          </td> 


                                          <td> 
                                            {result3.map((line, index) => (
                                                    <div key={index} >
                                                      <h5 class=" m-2"> {line}</h5>
                                                     
                                                </div>
                                              ))}
                                          </td> 

                                          <td> 
                                            {result3.map((line, index) => (
                                                    <div key={index} >
                                                          <button type="button"
                                                  class="btn btn-info btn-sm m-1"
                                                  onClick={()=>{
                                                    setLRW(line) 
                                                 
                                                    }}
                                            >Add
                                            
                                            
                                            </button>  
                                            {showSecondButton &&  <button type="button"
                                                class="btn btn-success btn-sm"
                                                onClick={handleonclike}
                                            > ClikeForResult</button>    }
                                                </div>
                                              ))}
                                          </td> 


                                        
                            </tbody>
                        </table>
          </Card>
        </div>
      </div>

    
         

        <div className='row container m-2'>
           {/* Dilution Information */}
                    <Card className="col-md-5 mt-3  card border-warning " style={{ width: 450 }} > 
                              <div className="container">
                      <h2>Dilution Information</h2>
                      <div className="row">
                          <div className="col">
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th>MDV</th>
                                          <th>Value</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                  
                                      <td> 
                                            
                                            {result.map((line, index) => (
                                                <div key={index}>
                                                  <h6>{`MVD/${line}`}</h6>
                                            </div>
                                          ))}
                                      </td> 
                                      <td>  
                                              {result1.map((line, index) => (
                                                  <div key={index}>
                                                    <h6> {line}</h6> 
                                                    
                                              </div>
                                            ))}        
                                      </td>               
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                            
              </Card>
         
              {/* Dilution For Sample Solution Preparation */}
              <div className='col-md-4 '>
              <Card className="card col-md-5 mt-4 m-3   card border-info text-dark bg-light " style={{ width: 700 }} >
                          <div className="card-header">
                              <h3>Dilution For Sample Solution Preparation  </h3>  
                                </div>
                                <table className="table">
                                  <thead>
                                       <tr>
                                        <th>Tube No</th>
                                        <th>Vol.of sample taken</th>
                                        <th>Vol.of LRW add (ml)</th>
                                        <th>Obtained Dilution</th>
                                        <th>MVD              </th>
                                      </tr>
                                </thead>
                                <tbody>
                                    <td> 
                                       {letters && letters.map((line, index) => (
                                              <div key={index}>
                                                <h6>{ line}</h6>
                                                
                                          </div>
                                        ))}
                                    </td> 
                                    <td> 
                                    {lrw2 && lrw2.map((lines, index) => (
                                              <div key={index}>
                                            <h6>{`${lines}`}</h6> 
                                             
                                              
                                          </div>
                                        ))}
                                    
                                     
                                    </td> 
                                    <td> 
                                    {/* Vol.of LRW add (ml)< */}
                                    {lrw1 && lrw1.map((line, index) => (
                                              <div key={index}>
                                            <h6>{`${line}`}</h6> 
                                             
                                              
                                          </div>
                                        ))}
                                      
                                    </td> 
                                    <td> 
                                    {store1 && store1.map((line, index) => (
                                              <div key={index}>
                                           <h6>{ `1 : ${line}`}</h6> 
                                             
                                              
                                          </div>
                                        ))}
                                    </td> 
                                    <td> 
                                    {result4.map((line, index) => (
                                              <div key={index}>
                                                <td> 
                                                  <h6>{`MVD/${line}`}</h6>
                                                  
                                                </td>
                                                
                                                
                                          </div>
                                        ))}
                                    <td><h6>MVD</h6> </td>
                                    </td> 
                                    
                             </tbody>
                                </table>
                           </Card> 
                           </div>       
      </div>

      <div className='container center mt-3 '>
    <Card className='card col-md-5  m-10 center   ' style={{ width: 1100 }} >
   
    <div className="container">
 
                      <h2>Dilution Information</h2>
                      <div className="row">
                          <div className="col">
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th><div className="image-container m-6">
                                          {images &&images.map((img, index) => (
                                              <div key={index} className="image-wrapper" style={{ marginBottom: '20px' }}>
                                                <p>{`MVD/${result4[index % result4.length]}`}</p>
                                                <h4>   </h4>
                                                <img src={img} alt={`Test Tube ${index}`} className="image" />
                                                <p>{`1:${store1[index % store1.length]}`}</p>
                                              </div>
                                            ))}
                                                
                                       </div>
                                      </th>
                                        
                                  </tr>
                                  </thead>
                                  
                              </table>
                          </div>
                      </div>
                      </div>
   </Card>
    </div >
                   <div className='container center mt-2 ' >
                           <Card className="card col-md-5  m-10 center  card border-info text-dark bg-light " style={{ width: 1100 }} >
                          <div className="card-header">
                              <h3>Test the sample as follows (50-50 Method)  </h3>  
                                </div>
                               
                                  <table class="table">
                                    <thead>
                                            <tr>
                                            <th>Tube No</th>
                                            <th>LRW(UL)</th>
                                            <th>CSE(UL)</th>
                                            <th> Sample(UL)</th>
                                            <th>Lysate(UL)</th>
                                            <th>Acceptable Result</th>
                                            <th>Name</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">1 & 2</th>
                                        <td>10</td>
                                        <td>NA</td>
                                        <td>NA</td>

                                        <td>100</td>
                                        <td>- -</td>
                                        <td>NWC (Bank)</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3 & 4</th>
                                        <td> 50</td>
                                        <td>50(4λ)</td>
                                        <td>NA</td>
                                        <td> 100</td>
                                        <td> + +</td>
                                        <td>2λ</td>
                                      </tr>
                                      <tr>
                                      <th scope="row">5 & 6</th>
                                        <td> 50</td>
                                        <td>50(2λ)</td>
                                        <td>NA</td>
                                        <td> 100</td>
                                        <td> + +/- -</td>
                                        <td>λ</td>
                                      </tr>
                                      <tr>
                                      <th scope="row">7 & 8</th>
                                        <td> 50</td>
                                        <td>50(λ)</td>
                                        <td>NA</td>
                                        <td> 100</td>
                                        <td> + +/- -</td>
                                        <td>λ/2</td>
                                      </tr>
                                      <tr>
                                      <th scope="row"> 9 & 10</th>
                                        <td> 50</td>
                                        <td>50(λ/2)</td>
                                        <td>NA</td>
                                        <td> 100</td>
                                        <td> - -</td>
                                        <td>λ/4</td>
                                      </tr>
                                      <tr>
                                      <th scope="row"> 11 & 12</th>
                                        <td > 50</td>
                                        <td>NA</td>
                                        <td>50(UL)(MVD/4)</td>
                                        <td> 100</td>
                                        <td> - -</td>
                                        <td>NPC(Test)</td>
                                      </tr>
                                      <tr>
                                      <th scope="row"> 13 & 14</th>
                                        <td> NA</td>
                                        <td>50(UL)</td>
                                        <td>50(UL)(MVD/4)</td>
                                        <td> 100</td>
                                        <td> + + </td>
                                        <td>PPC(Test)</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                 
                           </Card> 


                                            </div>
    </Layout>
  )
}

export default ShowDilution