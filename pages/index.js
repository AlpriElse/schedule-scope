import React from 'react'
import Link from 'next/link'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Layout from '../components/Layout'

import './index.scss'

const Index = () => (
  <Layout>
    <Container>
      <Col md={6}>
        <h2 className="brand">Schedule Scope</h2>
        <div>
          <h6 className="lead">Love the courses you take.</h6>
          <br/>
          <Link href="/explore">
            <Button variant="primary">Explore</Button>
          </Link>
        </div>
      </Col>
    </Container>
  </Layout>
)

export default Index
