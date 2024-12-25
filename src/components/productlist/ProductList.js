import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../productlist/productlist.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() =>
    {
        const fetchProduct = async () =>
        {
            try 
            {
                const res  = await axios.get('https://fakestoreapi.com/products ');
                setProducts(res.data);
            }
            catch (err) 
            {
                console.error(err);

            }
        };
        fetchProduct();
    } , []);

return (
    <div className="product-list">
      <h1 className="S-mart"><i>S_MART</i></h1>  
      <h1 className="Name"><i>Store Products</i></h1>
      <table className="list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button className="view-btn" onClick={() => navigate(`/product/${product.id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;