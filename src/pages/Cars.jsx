import {Link} from 'react-router-dom'
const CarsPage = () => {
    return (  
        <div style={{display: 'grid'}}>
        <Link to="/cars/add">Add Car</Link>
        <Link to="/cars/1">Car 1</Link>
        <Link to="/cars/2">Car 2</Link>
        <Link to="/cars/3">Car 3</Link>
        <Link to="/cars/4">Car 4</Link>
        <Link to="/cars/5">Car 5</Link>
        </div>
    )   
}
export default CarsPage