import React from 'react'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
    <div className="container d-flex h-75 align-items-center">
      <div className="mx-auto text-center">
        <h2 className="text-white mx-auto mt-2 mb-5">Explore courses that interest you at the University of Illinois at Urbana-Champaign.</h2>
        <Link className="btn btn-primary" to="/explore">Go Explore</Link>
      </div>
    </div>
  )
}
export default Index
