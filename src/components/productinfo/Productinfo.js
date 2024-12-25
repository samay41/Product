import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './productinfo.css';

const Productinfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try 
      {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } 
      catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="Information">
      <button onClick={() => navigate('/')}>Back to Product List</button>
      <h1>Product Details</h1>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Title:</strong> {product.title}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
    </div>
  );
};

export default Productinfo;
