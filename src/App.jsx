
import RootLayout from './shared/components/Layouts/RootLayout'
import CarsLayout from './shared/components/Layouts/CarsLayout'
import TestPage from './pages/Test'
import { Routes, Route } from 'react-router-dom' 
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import FinishProduct from './pages/FinishProduct'
import CarPage from './pages/Car'
import AddCarPage from './pages/FinishProduct'
import NotFoundPage from './pages/NotFound'
import Array from './pages/Array'
const App = () => {
    return (  
        <Routes>
                <Route element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/test" element={<TestPage/>} />
               <Route path="/array" element={<Array />} />
                    <Route element={<CarsLayout />}>
                        <Route path="/finishproduct" element={<FinishProduct/>} />
                        <Route path="/cars/:id" element={<CarPage/>} />
                        <Route path="/cars/:add" element={<AddCarPage/>} />
                    </Route>
                </Route>
             <Route path="*" element={<NotFoundPage/>} />
        </Routes>  
    )
}
export default App
