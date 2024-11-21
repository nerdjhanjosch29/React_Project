// import Header from '../Partials/Header'
// import Footer from '../Partials/Footer'
// import RootLayoutDesign from '../Layouts/css/RootLayout.css'
// import './RootLayout.css'; 
import { Outlet} from 'react-router-dom'
const RootLayout = () => {
    return (

    <div>
{/* 
         <div className="navbar navbar-expand-lg text-sm-center bg-body-secondary d-flex justify-content-center " >
            <Link to="/" className='text-decoration-none me-3'>Home</Link>
            <Link to="/about" className='text-decoration-none me-3'>About</Link>
            <Link to="/finishproduct" className='text-decoration-none me-3'>Finish Product</Link>
            <Link to="/test" className='text-decoration-none me-3'>Test</Link>
            <Link to="/array" className='text-decoration-none me-3'>Array</Link>   
         </div> */}

  <div class="row">
    {/* <!-- Sidebar --> */}
    <nav class="col-md-3 col-lg-2 d-md-block bg-body-secondary  navbar navbar-expand-md navbar-light">
      <div class="container-fluid flex-column">
        {/* <!-- Logo at the top left --> */}
        <a class="navbar-brand ms-3 mt-2" href="/">Logo</a>
{/*      <!-- Toggler for smaller screens --> */}
        <button class="navbar-toggler ms-3 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Sidebar links --> */}
        <div class="collapse navbar-collapse flex-column" id="sidebarMenu">
          <ul class="navbar-nav flex-column ms-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/finishproduct">Finish Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/test">Test</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/array">Array</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <Outlet context={{ test: 'Test' }}/> 
    </div>
    )
}
export default RootLayout
