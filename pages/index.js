import Link from 'next/link'
import Layout from '../components/Layout'

import './index.scss'

const Index = () => (
  <Layout>
    <div className="container text-white text-right col-md-6">
      <h2 className="brand">Illini Advisor</h2>
      <div>
        <h6 className="tagline lead">Find the course you'll love.</h6>
        <Link href="/explore">
          <a className="btn btn-primary">Explore</a>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Index
