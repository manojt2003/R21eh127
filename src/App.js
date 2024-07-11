import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { getProducts } from './api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts('ANZ', 'Laptop', 100, 10000, 10);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
};

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts('ANZ', 'Laptop', 100, 10000, 1);
      setProduct(data[0]);
    };
    fetchProduct();
  }, [match.params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Products</Link>
            </li>
            <li>
              <Link to="/product/1">Product Details</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/" component={AllProducts} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

