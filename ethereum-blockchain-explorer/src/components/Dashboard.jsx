import React, { useState, useEffect } from 'react';
import Transactions from './Transactions';
import Transfer from './Transfer';
import Blocks from './Blocks';
import { generateMockEthereumData } from './MockData';

const Dashboard = ({ section }) => {
    const [transactions, setTransactions] = useState([]);
    const [latestBlocks, setLatestBlocks] = useState([]);

    useEffect(() => {
        // Fetch mock Ethereum data on mount
        const mockData = generateMockEthereumData(25);
        setTransactions(mockData);
        setLatestBlocks(mockData.slice(0, 2)); // Show only the two latest blocks
    }, []);

    // Function to handle adding a new transaction from the Transfer form
    const addNewTransaction = (newTx) => {
        setTransactions((prevTx) => [newTx, ...prevTx]);
        setLatestBlocks((prevBlocks) => [newTx, ...prevBlocks.slice(0, 1)]);
    };

    const availableAddresses = transactions.map((tx) => tx.from);

    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold">Blockchain Overview</h2>
                <p className="mt-2">Summary information about the blockchain goes here.</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <h3 className="font-semibold text-lg">Latest Blocks</h3>
                        <ul>
                            {latestBlocks.map((block, index) => (
                                <li key={index} className="border p-2 rounded">
                                    <strong>Transaction Hash:</strong> {block.transactionHash} <br />
                                    <strong>From:</strong> {block.from} <br />
                                    <strong>To:</strong> {block.to} <br />
                                    <strong>Amount:</strong> {block.amount} ETH
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        {section === 'transactions' && <Transactions transactions={transactions} />}
                        {section === 'transfer' && <Transfer addNewTransaction={addNewTransaction} availableAddresses={availableAddresses} />}
                        {section === 'blocks' && <Blocks transactions={transactions} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
