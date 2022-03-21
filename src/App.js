import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Cart from './pages/Cart';
import ProductInfo from './pages/ProductInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/registration' exact element={<Registration />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/product-info' exact element={<ProductInfo />} />
      </Routes>
    </div>
  );
}
export default App;
