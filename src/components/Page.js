import React from 'react'
import Nav from './Nav'

const style = {
}
const Page = (props) => (
  <div>
    <Nav/>
    <div className="masthead" style={style}>
      {props.children}
    </div>
  </div>
)


export default Page
