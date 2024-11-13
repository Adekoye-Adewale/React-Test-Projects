'use client'
import { useState } from "react";

export default function TodoApp() {
        // State for the list and new task input
        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState("");

        // Function to handle adding a task
        const addTask = () => {
                if (newTask.trim()) {
                        setTasks([...tasks, newTask]);
                        setNewTask("");
                }
        };

        // Function to handle removing a task
        const removeTask = (index) => {
                const updatedTasks = tasks.filter((_, i) => i !== index);
                setTasks(updatedTasks);
        };

        return (
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                                <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

                                <div className="flex mb-4">
                                        <input
                                                type="text"
                                                className="border border-gray-300 rounded-l px-4 py-2 flex-grow focus:outline-none"
                                                placeholder="Add a new task"
                                                value={newTask}
                                                onChange={(e) => setNewTask(e.target.value)}
                                        />
                                        <button
                                                onClick={addTask}
                                                className="bg-blue-500 text-white rounded-r px-4 py-2"
                                        >
                                                Add
                                        </button>
                                </div>

                                <ul className="space-y-2">
                                        {tasks.map((task, index) => (
                                                <li
                                                        key={index}
                                                        className="flex justify-between items-center bg-gray-200 p-2 rounded"
                                                >
                                                        <span>{task}</span>
                                                        <button
                                                                onClick={() => removeTask(index)}
                                                                className="text-red-500 hover:text-red-700"
                                                        >
                                                                Remove
                                                        </button>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </div>
        );
}
