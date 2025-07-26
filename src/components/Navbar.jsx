import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Heart, Search, User } from 'lucide-react';
import logo from "../assets/stylino-logo.png";
 // ✅ Make sure this file exists in src/assets

const Navbar = ({ cartItemsCount, onCartClick, onProfileClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ✅ fixed typo
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center ml-2 space-x-2">
              <img src={logo} alt="Stylino Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-gray-800">Stylino</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </div>

          {/* Search & Icons */}
          <div className="flex items-center space-x-4">
            <form
              onSubmit={handleSearch}
              className="hidden sm:flex items-center border rounded-md overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1 focus:outline-none"
              />
              <button type="submit" className="px-2 bg-black text-white">
                <Search size={18} />
              </button>
            </form>

            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Heart size={20} />
            </button>

            <button
              className="p-2 text-gray-600 hover:text-gray-900"
              onClick={onProfileClick}
            >
              <User size={20} />
            </button>

            <button
              className="p-2 text-gray-600 hover:text-gray-900 relative"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <div className="px-4 py-2 flex flex-col space-y-2">
            <Link to="/" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
