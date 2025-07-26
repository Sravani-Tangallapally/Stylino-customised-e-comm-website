import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCart, Menu, X, Heart, Search, User } from 'lucide-react';

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Categories from './components/Categories';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Shoes from './components/Shoes';
import Beauty from './components/Beauty';
import Decor from './components/Decor';
import Bags from './components/Bags';
import Jewellery from './components/Jewellery';
import SearchResults from './components/SearchResults';
import Checkout from './components/Checkout';
import About from './components/About';






function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar
          cartItemsCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
          onProfileClick={() => setShowSignIn(true)}
        />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductList onAddToCart={addToCart} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/women" element={<Women />} />
            <Route path="/categories/men" element={<Men />} />
            <Route path="/categories/kids" element={<Kids />} />
            <Route path="/categories/shoes" element={<Shoes />} />
            <Route path="/categories/beauty" element={<Beauty />} />
            <Route path="/categories/decor" element={<Decor />} />
            <Route path="/categories/bags" element={<Bags />} />
            <Route path="/categories/jewellery" element={<Jewellery />} />
            <Route path="/search" element={<SearchResults onAddToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} totalAmount={totalAmount} />} />
            <Route path="/about" element={<About />} />



          </Routes>
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        {showSignIn && (
          <SignIn
            onClose={() => setShowSignIn(false)}
            onSwitchToSignUp={() => {
              setShowSignIn(false);
              setShowSignUp(true);
            }}
          />
        )}

        {showSignUp && (
          <SignUp
            onClose={() => setShowSignUp(false)}
            onSwitchToSignIn={() => {
              setShowSignUp(false);
              setShowSignIn(true);
            }}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
