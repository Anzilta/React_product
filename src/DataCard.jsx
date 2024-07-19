
import React, { useState } from 'react'
import './datacard.css'
import axios from 'axios'
import { useEffect } from 'react'


const DataCard = () => {


    const[Data,setData]=useState([])
    useEffect(()=> {
     
       axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
          console.log(response.data),
          setData(response.data)})
        
        .catch((error) => {
            console.log(error)
        })
    },[])
  return (
    <div>
    <div className='text'>
      <h4>PRODUCTS</h4>
    </div>
    <div className='data'>
      {Data.map((data,i)=>(
        <div className='card-container'>
        <div className='card-img'key={i}>
          <img src={data.image} alt='/'></img>
          <div className='card-body'>
        <h2>{data.title}</h2>
        </div>
        <div className='para'>
            <b>{data.catagory}</b>
        <b>Rs-{data.Price}</b>
        
        </div>
        </div>
        </div>
          
        ))}
      </div>
    
      </div>
  )
}

export default DataCard