import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import BlockDetails from './BlockDetails';

// Hardcoded mock Ethereum blocks with addresses and their block details
const blocks = [
    {
        address: faker.finance.ethereumAddress(),
        balance: faker.finance.amount(10, 100, 2, 'ETH'),
        gasUsed: faker.datatype.number({ min: 21000, max: 100000 })
    },
    {
        address: faker.finance.ethereumAddress(),
        balance: faker.finance.amount(10, 100, 2, 'ETH'),
        gasUsed: faker.datatype.number({ min: 21000, max: 100000 })
    },
    {
        address: faker.finance.ethereumAddress(),
        balance: faker.finance.amount(10, 100, 2, 'ETH'),
        gasUsed: faker.datatype.number({ min: 21000, max: 100000 })
    }
];

const Blocks = () => {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedBlock, setSelectedBlock] = useState(null);

    // Event handler for dropdown change
    const handleOnChange = (e) => {
        const address = e.target.value;
        setSelectedAddress(address);
        const block = blocks.find((block) => block.address === address);
        setSelectedBlock(block || null);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Blocks</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Ethereum Address</label>
                <select
                    value={selectedAddress}
                    onChange={handleOnChange}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select an Address</option>
                    {blocks.map((block) => (
                        <option key={block.address} value={block.address}>
                            {block.address}
                        </option>
                    ))}
                </select>
            </div>

            {selectedBlock && <BlockDetails {...selectedBlock} />}
        </div>
    );
};

export default Blocks;
