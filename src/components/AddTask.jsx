import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import axios from "axios";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    toast.error(
                        "A tarefa precisa de uma descrição para ser adicionada!"
                    )
                );
            }
            await axios.post(
                "https://task-manager-backend-lucasvilela.up.railway.app/tasks",
                {
                    description: task,
                    isCompleted: false,
                }
            );
            await fetchTasks();

            setTask("");

            return toast.success("A tarefa foi adicionada com sucesso!");
        } catch (_error) {
            return toast.error("A tarefa não foi adicionada!");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="white" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
