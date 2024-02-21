import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = [
    {
      name:"Home",
      path:"/"
    },
    {
      name:"Your Favourite Meals",
      path:"/favourite"
    },
  ]

  const [active,setAcitve]  = useState(0)
  return (
    <header>
  <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
    <Link className="flex  items-center mb-4 md:mb-0" to={"/"}>
    <img src="/logo.png" alt="logo" width={50}/>
      <span className="ml-3 text-xl">Recipe Finder</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
     {
       links.map((link,index)=>{
        return  <Link className={`mr-5 ${active==index ? 'border-b-2 border-green-500':''}`} onClick={()=>setAcitve(index)} to={link.path} key={index} >{link.name}</Link>
     
       
       })
     }
    
    </nav>
    
  </div>
</header>

  )
}

export default Navbar