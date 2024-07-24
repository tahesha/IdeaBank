import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Idea Bank</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/add">Add Idea</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/random">Random Idea</Link>
            </nav>
        </header>
    );
};

export default Header;
