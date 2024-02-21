import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen fixed top-0 left-0 w-full z-50 bg-white">
  <div className="flex-col space-y-4 text-center">
    <div className="text-fuchsia-600 text-xl font-medium">Recipe Finder App</div>
    <div className="text-5xl font-medium">Page Not found</div>
    <div className="flex items-center justify-center">
      <Link className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer" to={"/"}>
        Visit Homepage
      </Link>
    </div>
  </div>
</div>

  )
}

export default NotFound