import { useState, FormEvent } from 'react';
import ThemeToggle from './ThemeToggle';
import TodoItem from './TodoItem';

import './Todo.scss';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type TodoProps = {
  onThemeToggle: () => void;
};

const Todo: React.FC<TodoProps> = ({ onThemeToggle }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>Список задач</h1>
        <ThemeToggle onClick={onThemeToggle} />
      </div>

      <form
        className="input-section"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="task-input"
          placeholder="Введите новую задачу"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="add-button"
        >
          Добавить
        </button>
      </form>

      <ul className="tasks-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={toggleTaskCompletion}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
