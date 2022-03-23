import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Cart from './pages/Cart';
import ProductInfo from './pages/ProductInfo';
import './styles/layout.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/registration' exact element={<Registration />} />
        <Route path='/product-info/:id' exact element={<ProductInfo />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
