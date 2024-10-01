import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-4 grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold">Blockchain Overview</h2>
                <p className="mt-2">Summary information about the blockchain goes here.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold">Latest Blocks</h2>
                <p className="mt-2">List of recent blocks will be displayed here.</p>
            </div>
        </div>
    );
};

export default Dashboard;
