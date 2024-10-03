import { faker } from '@faker-js/faker';
import CryptoJS from 'crypto-js';

// Function to generate 50 mock Ethereum transactions
export const generateMockEthereumData = (num = 25) => {
    const mockData = [];

    for (let i = 0; i < num; i++) {
        const block = {
            blockNumber: faker.number.float({ min: 1000000, max: 2000000 }),  // Random block number
            transactionHash: CryptoJS.SHA256(faker.string.uuid()).toString(),  // Transaction hash
            from: faker.finance.ethereumAddress(),  // From address
            to: faker.finance.ethereumAddress(),    // To address
            amount: faker.finance.amount({ min: 0.1, max: 100, dec: 18, symbol: 'ETH' }),  // Random ETH amount
            gasUsed: faker.number.float({ min: 21000, max: 500000 }),  // Gas used
            timestamp: faker.date.recent().toISOString(),  // Recent timestamp
        };

        mockData.push(block);
    }

    return mockData;
};
