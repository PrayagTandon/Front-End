import React from 'react';
import Header from './Header';
import { faker } from '@faker-js/faker';
import CryptoJS from 'crypto-js';

// Function to generate a mock transaction
const generateTransaction = () => {
    return {
        id: CryptoJS.SHA256(faker.string.uuid()).toString(), // Correct UUID generation
        from: faker.finance.ethereumAddress(),
        to: faker.finance.ethereumAddress(),
        amount: faker.finance.amount(0.01, 5, 5, 'ETH'),
        timestamp: faker.date.recent().toLocaleString(),
    };
};

// Generate a list of 5 mock transactions
const transactions = Array.from({ length: 5 }, generateTransaction);

const Transactions = () => {
    return (
        <div className="p-6">
            <Header title="Transactions" />
            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
                <ul className="space-y-4">
                    {transactions.map((tx) => (
                        <li key={tx.id} className="bg-white p-4 rounded-lg shadow-sm">
                            <p><strong>Transaction ID:</strong> {tx.id}</p>
                            <p><strong>From:</strong> {tx.from}</p>
                            <p><strong>To:</strong> {tx.to}</p>
                            <p><strong>Amount:</strong> {tx.amount}</p>
                            <p><strong>Date:</strong> {tx.timestamp}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Transactions;
