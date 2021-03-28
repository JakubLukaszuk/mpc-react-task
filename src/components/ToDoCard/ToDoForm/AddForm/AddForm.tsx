import React, { useState } from "react";
import { addTask } from "../../../../slices/taskSlice";
import { useAppDispatch } from "../../../../store";
import IconButton from "../../../UI/IconButton/IconButton";
import ThemedButton from "../../../UI/ThemedButton.tsx/ThemedButton";
import TogleButton from "../../../UI/ToggleButton/TogleButton";
import "../ToDoForm.css";

interface IToDoAddForm {
  userName: string;
  close: (event: React.MouseEvent<HTMLElement>) => void;
}

const ToDoAddForm: React.FC<IToDoAddForm> = (props) => {
  const { userName, close } = props;

  const [task, setTask] = useState("");
  const [isTaskComplete, setIsTaskCompele] = useState(false);

  const dispatch = useAppDispatch();

  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setTask(value);
  };

  const toggleIsTaskComplete = () => {
    setIsTaskCompele(!isTaskComplete);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addTask({
        task: task,
        isCompleted: isTaskComplete ? 1 : 0,
        username: userName,
      })
    );
  };

  return (
    <form className="ToDoForm" onSubmit={submit}>
      <header className="ToDoForm ToDoForm__head">
        <h2>Add new tak</h2>
        <IconButton icon="cross" click={close} />
      </header>
      <h3>{userName}</h3>
      <section className="ToDoForm ToDoForm__editables">
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
        <ThemedButton rest={{ type: "submit" }}>Submit</ThemedButton>
      </section>
    </form>
  );
};

export default ToDoAddForm;
