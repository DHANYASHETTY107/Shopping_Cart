import React, { useState } from 'react';
import './App.css';
import shirtImage from './Images/Oxford_Shirt.jpg';
import tunic from './Images/Tunic.jpg';
import watchbuds from './Images/Watchbuds.jpg';
import sleeve_shirt from './Images/Sleeve.jpg';
import belt from './Images/Belt.jpg';
import sneekers from './Images/Snekeers.jpeg';
import sunglass from './Images/SunGlass.jpg';
import casualWatch from './Images/Watch.jpg';
import formal_Shoe from './Images/FormalShoe.jpg';
import backpack from './Images/Bag.jpg';



function App() {
  const [cart, setCart] = useState([]);

  // Dummy data for products
  const products = [
    { id: 1, name: 'Oxford Shirts', price: 1200, rating: 4.9,image:shirtImage },
    { id: 2, name: 'Tunic', price: 459, rating: 4.4, image:tunic },
    { id: 3, name: 'Huawei Watch Buds', price: 4059, rating: 4.4, image:watchbuds },
    { id: 4, name: 'Short-Sleeve Shirt', price: 800, rating: 4.9, image: sleeve_shirt},
    { id: 5, name: 'Leather Belt', price: 350, rating: 4.6, image:belt },
    { id: 6, name: 'Running Sneakers', price: 2999, rating: 4.7, image: sneekers},
    { id: 7, name: 'Sunglasses', price: 899, rating: 4.5, image: sunglass},
    { id: 8, name: 'Casual Watch', price: 2599, rating: 4.8, image: casualWatch },
    { id: 9, name: 'Formal Shoes', price: 1999, rating: 4.3, image: formal_Shoe },
    { id: 10, name: 'Backpack', price: 1299, rating: 4.7, image:backpack},
    // Add other products here
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header>
        <div className="navbar">
          <input type="search" placeholder="Search" id="search-bar" />
        </div>
        <div className="filter-options">
          <button>All</button>
          <button>Men</button>
          <button>Women</button>
          <button>Watch</button>
        </div>
      </header>

      <main>
        <ProductList products={products} addToCart={addToCart} />
        <ShoppingCart cart={cart} />
      </main>
    </div>
  );
}

function ProductList({ products, addToCart }) {
  return (
    <section className="product-listing">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <p>({product.rating})</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

function ShoppingCart({ cart }) {
  // Calculate total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <aside className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.name}</h3>
          {/* Quantity controls would go here */}
          <p>${item.price}</p>
        </div>
      ))}
      <div className="cart-summary">
        <p>Sub-Total</p>
        <p>${total.toFixed(2)}</p>
        <button>Checkout</button>
      </div>
    </aside>
  );
}

export default App;