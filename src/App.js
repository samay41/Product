import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "../src/components/productlist/ProductList";
import Productinfo from "../src/components/productinfo/Productinfo";

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<Productinfo />} />
      </Routes>
    </Router>
  );
}

export default App;
