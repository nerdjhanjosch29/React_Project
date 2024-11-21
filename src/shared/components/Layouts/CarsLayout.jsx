// import Header from '../Partials/Header'
// import Footer from '../Partials/Footer'
import { Outlet } from 'react-router-dom'
const CarsLayout = () => {
    return (
     <div className="cars-main">
        <div>This is from LAYOUT!</div>
        <Outlet/>
      <div>Footer Layout</div>
     </div>
    )
}
export default CarsLayout