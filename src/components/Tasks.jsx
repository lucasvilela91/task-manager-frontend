import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { toast } from "react-toastify";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(async () => {
        try {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_REMOTE_URL}/tasks`
            );
            setTasks(data);
        } catch (_error) {
            toast.error("Não foi possível recuperar as tarefas");
        }
    }, []);

    const lastTask = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === true);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTask.map((lastTask) => (
                        <TaskItem
                            key={lastTask._id}
                            task={lastTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {completedTasks.map((completedTask) => (
                        <TaskItem
                            key={completedTask._id}
                            task={completedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
