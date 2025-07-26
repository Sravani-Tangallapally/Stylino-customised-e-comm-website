import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#585b5b] text-white pt-12">

    
      <div className="relative z-10 container mx-auto px-6 md:px-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* SHOP */}
          <div>
            <h4 className="text-lg font-semibold mb-4"> ONLINE SHOPPING</h4>
            <ul className="space-y-2 text-sm">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home</li>
              <li>Beauty</li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CUSTOMER POLICIES</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&c</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">USEFUL LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Career</li>
              <li>Site Map</li>
              <li>CLearTrip</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sign up to get 10% off</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 rounded-full text-black focus:outline-none flex-grow"
              />
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                Subscribe
              </button>
            </form>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
              <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
              <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-4 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Stylino. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Do Not Sell My Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
