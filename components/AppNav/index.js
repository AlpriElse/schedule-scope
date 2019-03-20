import React from 'react'
import Link from 'next/link'

import Nav from 'react-bootstrap/Nav'

import './Nav.scss'

const AppNav = () => (
  <Nav className="justify-content-center">
    <Nav.Item>
      <Link href="/explore">
        <Nav.Link>Explore</Nav.Link>
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link href="/myschedule">
        <Nav.Link>My Schedule</Nav.Link>
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link href="/buildschedule">
        <Nav.Link>Build Schedule</Nav.Link>
      </Link>
    </Nav.Item>
  </Nav>
)


export default AppNav
