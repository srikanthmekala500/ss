import React from 'react'
import Header from './Header'
import Footer from './Footer'
 

 

const Layout = ({children}) => {
  return (
    <div>
       
        <Header/>
        
        <main style={{ minHeight: "80vh" }}> 
        
         
         {children}
         
         </main>

        <Footer/>

    </div>

    
  )
}

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "SrikanthMekala",
};


export default Layout