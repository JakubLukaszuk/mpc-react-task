import { type } from "os";
import React, { useState } from "react";
import { consts } from "../../../../constants";
import { SelectedTask } from "../../../../pages/ToDoPage";
import { addTask, deleteTask, updateTask } from "../../../../slices/taskSlice";
import { useAppDispatch } from "../../../../store";
import IconButton from "../../../UI/IconButton/IconButton";
import ThemedButton from "../../../UI/ThemedButton.tsx/ThemedButton";
import TogleButton from "../../../UI/ToggleButton/TogleButton";

interface IToDoAddForm {
  taskValue: SelectedTask,
  close: (event?:  React.MouseEvent<HTMLElement>) => void
}

const ToDoAddForm: React.FC<IToDoAddForm> = (props) => {
  const { taskValue, close } = props;

  const [task, setTask] = useState(taskValue.task);
  const [isTaskComplete, setIsTaskCompele] = useState(taskValue.isComplete);

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
    dispatch(updateTask({id:taskValue.id ,task: task, isCompleted: isTaskComplete ? 1: 0, username: taskValue.author}));
    close();
  }

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(deleteTask({id:taskValue.id , username: taskValue.author}));
    close();
  }

  return (
    <form onSubmit={submit}>
      <header>
        <h3>{taskValue.author}</h3>
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
        <TogleButton initState={isTaskComplete} click={toggleIsTaskComplete} />
      </label>
      <ThemedButton rest={{type: "submit"}}>
        Submit
      </ThemedButton>
      <ThemedButton rest={{onClick: handleDelete}}>
        Delete
      </ThemedButton>
    </form>
  );
};

export default ToDoAddForm;
