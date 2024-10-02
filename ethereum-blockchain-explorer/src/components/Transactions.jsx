import React from 'react';

const Transactions = ({ transactions }) => {
    return (
        <div>
            <h3 className="font-semibold text-lg mb-2">All Transactions</h3>
            <ul>
                {transactions.map((tx, index) => (
                    <li key={index} className="border p-2 rounded mb-2">
                        <strong>Transaction Hash:</strong> {tx.transactionHash} <br />
                        <strong>From:</strong> {tx.from} <br />
                        <strong>To:</strong> {tx.to} <br />
                        <strong>Amount:</strong> {tx.amount} ETH
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
