import { type } from "os";
import React, { useState } from "react";
import { consts } from "../../../../constants";
import { addTask, updateTask } from "../../../../slices/taskSlice";
import { useAppDispatch } from "../../../../store";
import IconButton from "../../../UI/IconButton/IconButton";
import ThemedButton from "../../../UI/ThemedButton.tsx/ThemedButton";
import TogleButton from "../../../UI/ToggleButton/TogleButton";

interface IToDoAddForm {
  userName: string;
  close: (event:  React.MouseEvent<HTMLElement>) => void
}

const ToDoAddForm: React.FC<IToDoAddForm> = (props) => {
  const { userName, close } = props;

  const [task, setTask] = useState("");
  const [isTaskComplete, setIsTaskCompele] = useState(false);

  const dispatch = useAppDispatch();

  const handleChangeTask = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setTask(value);
  };

  const toggleIsTaskComplete = () => {
    setIsTaskCompele(!isTaskComplete);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    dispatch(addTask({task: task, isCompleted: isTaskComplete ? 1: 0, username: consts.USER_NAME }))
  }

  return (
    <form onSubmit={submit}>
      <header>
        <h3>{userName}</h3>
      </header>
      <IconButton icon="cross" click={close}/>
      <label>
        Task:
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleChangeTask}
        />
      </label>
      <label>
        IsDone:
        <TogleButton click={toggleIsTaskComplete} />
      </label>
      <ThemedButton rest={{type: "submit"}}>
        Submitt
      </ThemedButton>
    </form>
  );
};

export default ToDoAddForm;
