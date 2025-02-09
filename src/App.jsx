import { useState } from "react";

import "./App.css";
import TaskItem from "./components/TaskItem.jsx";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar Programação",
            isCompleted: false,
        },
        {
            id: "2",
            description: "Ler",
            isCompleted: true,
        },
    ]);

    const handleCleanTasks = () => {
        setTasks([]);
    };

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
            <button onClick={handleCleanTasks}>Limpar tarefas</button>
        </>
    );
}

export default App;
