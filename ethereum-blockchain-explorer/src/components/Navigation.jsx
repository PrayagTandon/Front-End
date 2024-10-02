import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
            <ul className="flex space-x-6">
                <li>
                    <Link to="/transactions" className="hover:text-gray-300">Transactions</Link>
                </li>
                <li>
                    <Link to="/transfer" className="hover:text-gray-300">Transfer</Link>
                </li>
                <li>
                    <Link to="/blocks" className="hover:text-gray-300">Blocks</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
