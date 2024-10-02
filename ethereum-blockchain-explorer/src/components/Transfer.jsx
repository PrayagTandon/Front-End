import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import CryptoJS from 'crypto-js';

const Transfer = ({ addNewTransaction }) => {
    const [fromAddress, setFromAddress] = useState(faker.finance.ethereumAddress());
    const [toAddress, setToAddress] = useState(faker.finance.ethereumAddress());
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            transactionHash: CryptoJS.SHA256(faker.datatype.uuid()).toString(),
            from: fromAddress,
            to: toAddress,
            amount: `${amount} ETH`,
            gasUsed: faker.datatype.number({ min: 21000, max: 500000 }),
            timestamp: new Date().toISOString(),
        };
        addNewTransaction(newTransaction);
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">Create New Transfer</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium">From Address</label>
                <input type="text" value={fromAddress} disabled className="mt-1 block w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">To Address</label>
                <input
                    type="text"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                    className="mt-1 block w-full p-2 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Amount (ETH)</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 block w-full p-2 border rounded-md"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow">
                Transfer
            </button>
        </form>
    );
};

export default Transfer;
