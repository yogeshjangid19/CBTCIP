import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    } else {
      alert("Task cannot be empty");
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const getFilteredTodos = () => {
    let filteredTodos = todos;
    if (filter === "completed") {
      filteredTodos = todos.filter((todo) => todo.completed);
    } else if (filter === "pending") {
      filteredTodos = todos.filter((todo) => !todo.completed);
    }

    if (sort === "alphabetical") {
      filteredTodos.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sort === "completed") {
      filteredTodos.sort((a, b) => b.completed - a.completed);
    }

    return filteredTodos;
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="heading">
          <h1>To Do List</h1>
        </div>
      </div>
      <div className="list_area">
        <div className="input_area">
          <input
            type="text"
            placeholder="Add New Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="add-btn" onClick={addTodo}>Add</button>
        </div>
        <div className="controls">
          <div className="filter-container">
            <label htmlFor="filter">Filter:</label>
            <select id="filter" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="sort-container">
            <label htmlFor="sort">Sort:</label>
            <select id="sort" onChange={handleSortChange} value={sort}>
              <option value="none">None</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <ul>
          {getFilteredTodos().map((todo, index) => (
            <li key={index} className={todo.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(index)} className="checkmark">
                {todo.completed ? "✓" : "○"}
              </span>
              <span className="todo-text">{todo.text}</span>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
