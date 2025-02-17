import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import axios from "axios";

const AddTask = () => {
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
        } catch (error) {}
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="white" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
