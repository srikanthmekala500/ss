import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-light p-3'> 
       <h4 className='text-center '> All Right reserved @Srikanth Mekala</h4>
       <Link to='/about'>About</Link>
       |
       <Link to='/concect'>Concect</Link>
       |
       <Link to='/policy'>Policy</Link>
    </div>
  )
}

export default Footer