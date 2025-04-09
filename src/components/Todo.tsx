import React, { useState, FormEvent } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Todo.scss";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь добавить логику добавления задачи
    setInputValue("");
  };

  return (
    <div className='todo-container'>
      <div className='todo-header'>
        <h1>Список задач</h1>
        <ThemeToggle />
      </div>

      <form className='input-section' onSubmit={handleSubmit}>
        <input
          type='text'
          className='task-input'
          placeholder='Введите новую задачу'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' className='add-button'>
          Добавить
        </button>
      </form>

      <div className='tasks-list'>{/* Здесь должны отображаться задачи */}</div>
    </div>
  );
};

export default Todo;
