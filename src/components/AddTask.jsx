import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = () => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };
    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton>+</CustomButton>
        </div>
    );
};

export default AddTask;
