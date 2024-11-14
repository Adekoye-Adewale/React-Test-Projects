'use client'
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function ToDoApp() {
        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState("");
        const [dueDate, setDueDate] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
        const [taskToDelete, setTaskToDelete] = useState(null);

        // Helper function to get today's date in the format required for the input
        const getTodayDate = () => {
                const today = new Date();
                return today.toISOString().slice(0, 16); // Format for 'datetime-local'
        };

        // Load tasks from cookies on initial render
        useEffect(() => {
                const savedTasks = Cookies.get("tasks");
                if (savedTasks) {
                        try {
                                const parsedTasks = JSON.parse(savedTasks);
                                console.log("Loaded tasks from cookies:", parsedTasks); // Debugging log
                                setTasks(parsedTasks);
                        } catch (error) {
                                console.error("Failed to parse tasks from cookies", error);
                        }
                } else {
                        console.log("No tasks found in cookies."); // Debugging log
                }
        }, []);

        // Save tasks to cookies whenever tasks array changes
        useEffect(() => {
                if (tasks.length > 0) {
                        Cookies.set("tasks", JSON.stringify(tasks), { expires: 7 }); // Set cookie to expire in 7 days
                        console.log("Tasks saved to cookies:", tasks); // Debugging log
                }
        }, [tasks]);

        // Function to add a task
        const addTask = () => {
                // Validate inputs
                if (!newTask.trim() || !dueDate) {
                        setErrorMessage("Please fill in both the task and due date.");
                        return;
                }

                // Check if the selected date is in the future
                const selectedDate = new Date(dueDate);
                const currentDate = new Date();
                if (selectedDate <= currentDate) {
                        setErrorMessage("Please select a future date and time.");
                        return;
                }

                // Check for duplicate task
                if (tasks.some((task) => task.name === newTask && task.dueDate === dueDate)) {
                        setErrorMessage("This task already exists.");
                        return;
                }

                // Add the task
                const newTaskObj = { name: newTask, dueDate };
                setTasks([...tasks, newTaskObj]);
                setNewTask("");
                setDueDate("");
                setErrorMessage(""); // Clear error message after successful addition
        };

        // Open the confirmation dialog to delete a task
        const confirmDeleteTask = (index) => {
                setTaskToDelete(index);
                setIsConfirmingDelete(true);
        };

        // Function to delete a task
        const deleteTask = () => {
                const updatedTasks = tasks.filter((_, i) => i !== taskToDelete);
                setTasks(updatedTasks);
                setIsConfirmingDelete(false);
                setTaskToDelete(null);
        };

        return (
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                                <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

                                {/* Display error message */}
                                {errorMessage && (
                                        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
                                                {errorMessage}
                                        </div>
                                )}

                                <div className="flex flex-col mb-4">
                                        <input
                                                type="text"
                                                className="border border-gray-300 rounded-t px-4 py-2 focus:outline-none"
                                                placeholder="Add a new task"
                                                value={newTask}
                                                onChange={(e) => setNewTask(e.target.value)}
                                        />
                                        <input
                                                type="datetime-local"
                                                className="border border-gray-300 rounded-b px-4 py-2 focus:outline-none mt-2"
                                                value={dueDate}
                                                min={getTodayDate()}
                                                onChange={(e) => setDueDate(e.target.value)}
                                        />
                                        <button
                                                onClick={addTask}
                                                className="mt-2 bg-blue-500 text-white rounded px-4 py-2"
                                        >
                                                Add Task
                                        </button>
                                </div>

                                <Tasks 
                                        tasks={tasks} 
                                        confirmDeleteTask={confirmDeleteTask}
                                />

                                {isConfirmingDelete && (
                                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
                                                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                                                        <p className="mb-4">Are you sure you want to delete this task?</p>
                                                        <div className="flex justify-end space-x-2">
                                                                <button
                                                                        onClick={() => setIsConfirmingDelete(false)}
                                                                        className="bg-gray-300 rounded px-4 py-2"
                                                                >
                                                                        Cancel
                                                                </button>
                                                                <button
                                                                        onClick={deleteTask}
                                                                        className="bg-red-500 text-white rounded px-4 py-2"
                                                                >
                                                                        Delete
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                )}
                        </div>
                </div>
        );
}

const Tasks = ({ tasks, confirmDeleteTask }) => {
        return (
                <ul className="space-y-2">
                        {tasks.map((task, index) => (
                                <li
                                        key={index}
                                        className="flex justify-between items-center bg-gray-200 p-2 rounded"
                                >
                                        <div>
                                                <span className="block font-medium">{task.name}</span>
                                                <span className="text-sm text-gray-500">
                                                        Due: {new Date(task.dueDate).toLocaleString()}
                                                </span>
                                        </div>
                                        <button
                                                onClick={() => confirmDeleteTask(index)}
                                                className="text-red-500 hover:text-red-700"
                                        >
                                                Remove
                                        </button>
                                </li>
                        ))}
                </ul>
        )
}