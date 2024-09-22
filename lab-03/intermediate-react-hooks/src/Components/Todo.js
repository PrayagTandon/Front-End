import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // FUNCTION TO ADD NEW ITEM TO THE TODO LIST
    const addTodo = () => {
        if (newTodo.trim() === '') return; //Guard Clause
        setTodos([...todos, newTodo]);
        setNewTodo('') //Clearing the input field
    };

    // FUNCTION TO REMOVE AN ITEM TO THE TODO LIST
    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Todo List</h1>

            {/* INPUT FIELD */}
            <input
                type='text'
                placeholder='Add a new todo'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                style={{
                    display: 'inline-block',
                    padding: '8px',
                    marginInline: '12px',
                    borderRadius: '6px',
                }}
            />
            <button
                style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'darkblue', color: 'whitesmoke', cursor: 'pointer' }}
                onClick={addTodo}>Add New todo</button>

            {/* TODO LIST */}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button style={{ padding: '4px', borderRadius: '8px', backgroundColor: 'red', color: 'white', marginLeft: '16px', cursor: 'pointer' }} onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;