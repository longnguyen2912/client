import './App.css';
import { Main } from './views/Main';
import { Routes, Route } from 'react-router-dom'
import CreateProduct from './views/CreateProduct';
import ProductShowOne from './views/ProductShowOne';
import UpdateProduct from './views/UpdateProduct';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <p>
        <Link to="/ProductManager/new">Create a product</Link>
        </p>
        <p>
        <Link to="/ProductManager">Dashboard/Main</Link>
      </p>
      <Routes>
        <Route path="/ProductManager" element={<Main />} />
        <Route path="/ProductManager/new" element={<CreateProduct />} />
        <Route path="/ProductManager/:id" element={<ProductShowOne />} />
        <Route path="/ProductManager/:id/edit" element={<UpdateProduct />} />
      </Routes>
      
    </div>
  );
}

export default App;