import React, { useState } from "react";
import TogleButton from "../../../UI/ToggleButton/TogleButton";

interface IToDoAddForm {
  userName: string;
}

const ToDoAddForm: React.FC<IToDoAddForm> = (props) => {
  const { userName } = props;

  const [task, setTask] = useState("");
  const [isTaskComplete, setIsTaskCompele] = useState(false);

  const handleChangeTask = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setTask(value);
  };

  const toggleIsTaskComplete = () => {
    setIsTaskCompele(!isTaskComplete);
  };

  return (
    <form>
      <header>
        <h3>{userName}</h3>
      </header>
      <label>
        Task:
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleChangeTask}
        />
      </label>
      <TogleButton click={toggleIsTaskComplete} />
    </form>
  );
};

export default ToDoAddForm;
