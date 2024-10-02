import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import Header from './Header';
import Receipt from './Receipt';

// Hardcoded Ethereum addresses for selection
const addresses = [
    faker.finance.ethereumAddress(),
    faker.finance.ethereumAddress(),
    faker.finance.ethereumAddress(),
    faker.finance.ethereumAddress(),
];

const Transfer = () => {
    const [amount, setAmount] = useState('');
    const [selectedFromAddress, setSelectedFromAddress] = useState('');
    const [selectedToAddress, setSelectedToAddress] = useState('');
    const [receipt, setReceipt] = useState(null);
    const [showReceipt, setShowReceipt] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const fakeReceipt = {
            transactionHash: faker.string.uuid(),
            blockHash: faker.string.uuid(),
            blockNumber: faker.datatype.number(),
            from: selectedFromAddress,
            to: selectedToAddress,
            amount,
            gasUsed: faker.datatype.number({ min: 21000, max: 50000 }),
        };
        setReceipt(fakeReceipt);
        setShowReceipt(true);
    };

    // Handle form reset
    const handleCancel = () => {
        setAmount('');
        setSelectedFromAddress('');
        setSelectedToAddress('');
        setShowReceipt(false);
    };

    return (
        <div className="p-6">
            <Header title="Transfers" />
            <form onSubmit={handleSubmit} className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Amount (ETH)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">From Address</label>
                    <select
                        value={selectedFromAddress}
                        onChange={(e) => setSelectedFromAddress(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select From Address</option>
                        {addresses.map((address) => (
                            <option key={address} value={address}>
                                {address}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">To Address</label>
                    <select
                        value={selectedToAddress}
                        onChange={(e) => setSelectedToAddress(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select To Address</option>
                        {addresses.map((address) => (
                            <option key={address} value={address}>
                                {address}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-red-500 text-white px-4 py-2 rounded-md shadow"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow"
                    >
                        Transfer
                    </button>
                </div>
            </form>

            {showReceipt && <Receipt {...receipt} />}
        </div>
    );
};

export default Transfer;
