import React from 'react';

function Todo() {
    return (
        <div>
            {/* HEADER */}
            <h1 style={{ textAlign: 'center', color: 'darkblue' }}>To-Do List</h1>

            {/* INPUT FIELD */}
            <div style={{ textAlign: 'center' }}>
                <input
                    type='text'
                    placeholder='Add a new Task'
                    style={{ padding: '8px' }}
                />
            </div>

            {/* BUTTON TO ADD A NEW TASK */}
            <button
                style={{
                    backgroundColor: 'darkblue',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    marginLeft: '5px',
                }}
            >
                Add a New Task
            </button>
        </div>
    );
}

export default Todo;