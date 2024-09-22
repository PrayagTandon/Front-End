import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // FUNCTION TO ADD NEW ITEM TO THE TODO LIST
    const addTodo = () => {
        if (newTodo.trim === '') return; //Guard Clause
        setTodos([...todos, newTodo]);
        setNewTodo('') //Clearing the input field
    };

    // FUNCTION TO REMOVE AN ITEM TO THE TODO LIST
    const removeTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index, 1);
        setTodos(updateTodos);
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
            />
            <button
                style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'darkblue' }}
                onClick={addTodo}>Add New todo</button>

            {/* TODO LIST */}
            <ul>
                {todos.map((todo, index) => {
                    <li key={index}>
                        {todo}
                        <button style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'red', color: 'white' }} onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Todo;