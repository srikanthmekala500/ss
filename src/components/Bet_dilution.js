import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from './Layout';
import { useNavigate } from 'react-router-dom'
import { URL } from './apiURL';
import { toast } from 'react-toastify';
const Bet_dilution = () => {
     
    const [usersData, setUsersData] = useState([])
    const navigate = useNavigate()
    
    const bet_dilutionfetch = async () => {

        try {
            const {data } = await axios.get(`${URL}/api/v1/user/bet_dilution`)
              if(data.success){
                setUsersData(data.category)
                console.log(data.category)
              }

            

        } catch (error) {
            console.log(error);
        }
    };
   
    const handledelete =async(id)=>{
        
        try {
          const {data} = await axios.delete(`${URL}/api/v1/user/delete/${id}`,
          );
          if(data.success){
            toast.success("delete")
            bet_dilutionfetch()
          }
          else{
            console.log(data.message)
            toast.error('something wrong')
          }
        } catch (error) {
          console.log(error)
          toast.error("something went to wrong")
        }
      }




    useEffect(()=>{
        bet_dilutionfetch()
    },[])
    
    return (
        <Layout>
            <div className="row">
                {usersData.map((e) => {
                    const { Endotoxin_Limit, Product_Name, Potency_of_Product, lysate, id } = e;

                    return (
                        <div className="col-md-4 mt-3" key={id}>
                            <div className=" card border-info mb-3 m-3">
                                <div className="card-header">
                                    <h3>Bacterial Endotoxin</h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        Product Name:
                                        <h3>{Product_Name}</h3>
                                    </li>
                                    <li className="list-group-item">Endotoxin Limit: {Endotoxin_Limit}</li>
                                    <li className="list-group-item">Potency of Product: {Potency_of_Product}</li>
                                    <li className="list-group-item">Lysate: {lysate}</li>
                                </ul>
                                <div className="card-footer">
                                    <button
                                        onClick={() => {
                                            navigate(`/ShowDilution/${e._id}`);
                                        }}
                                        type="button"
                                        className="btn btn-success"
                                    >
                                        Dilution
                                    </button>
                                    <button
                                        onClick={()=>handledelete(e._id)}
                                        type="button"
                                        className="btn btn-danger m-3"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );



  


}

export default Bet_dilution
 