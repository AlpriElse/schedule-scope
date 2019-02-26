import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <div className="container d-flex h-75 align-items-center">
      <div className="flex-fill mx-auto text-center">
        <h2 className="text-white mx-auto mt-2 mb-5">Explore courses that interest you at the University of Illinois at Urbana-Champaign.</h2>
        <Link href="/explore">
          <a className="btn btn-primary">Explore</a>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Index
