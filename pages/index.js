import Head from 'next/head'
import Link from 'next/link'

const Index = () => (
  <div>
    <Head>
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
      <link href="/static/css/grayscale.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <title>Illini Advisor</title>
    </Head>
    <div className="container d-flex h-75 align-items-center">
      <div className="flex-fill mx-auto text-center">
        <h2 className="text-white mx-auto mt-2 mb-5">Explore courses that interest you at the University of Illinois at Urbana-Champaign.</h2>
        <Link href="/explore">
          <a className="btn btn-primary">Explore</a>
        </Link>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
  </div>
)

export default Index
