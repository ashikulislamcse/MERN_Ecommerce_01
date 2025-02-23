import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const products = useSelector((state) => state.cart.products);
    console.log(products);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search initiated');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/">e-SHOP</Link>
                </div>
                <div className="flex-1 relative mx-4">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search a product here..."
                            className="w-full border py-2 px-4"
                        />
                        <button type="submit" aria-label="Search">
                            <FaSearch className="absolute top-3 right-3 text-red-500" />
                        </button>
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="relative" aria-label="View Cart">
                        <FaShoppingCart className="text-lg" />
                        {products.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                                {products.length}
                            </span>
                        )}
                        
                    </Link>
                    <Link to="/login">
                        <button className="hidden md:block">Login | Register</button>
                        <button className="block md:hidden" aria-label="User Menu">
                            <FaUserAlt />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 space-x-10 font-bold">
                <Link
                    to="/"
                    className={`${isActive("/") ? "underline text-red-500" : "hover:underline"}`}
                >
                    Home
                </Link>
                <Link
                    to="/shop"
                    className={`${isActive("/shop") ? "underline text-red-500" : "hover:underline"}`}
                >
                    Shop
                </Link>
                <Link
                    to="/about"
                    className={`${isActive("/about") ? "underline text-red-500" : "hover:underline"}`}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className={`${isActive("/contact") ? "underline text-red-500" : "hover:underline"}`}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
