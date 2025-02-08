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

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
}

export default App;
