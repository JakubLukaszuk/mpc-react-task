import { type } from "os";
import React, { useState } from "react";
import { consts } from "../../../../constants";
import { SelectedTask } from "../../../../pages/ToDoPage";
import { addTask, deleteTask, updateTask } from "../../../../slices/taskSlice";
import { useAppDispatch } from "../../../../store";
import IconButton from "../../../UI/IconButton/IconButton";
import ThemedButton from "../../../UI/ThemedButton.tsx/ThemedButton";
import TogleButton from "../../../UI/ToggleButton/TogleButton";
import "../ToDoForm.css";

interface IToDoAddForm {
  taskValue: SelectedTask;
  close: (event?: React.MouseEvent<HTMLElement>) => void;
  unselectTask: () => void;
}

const ToDoAddForm: React.FC<IToDoAddForm> = (props) => {
  const { taskValue, close, unselectTask } = props;

  const [task, setTask] = useState(taskValue.task);
  const [isTaskComplete, setIsTaskCompele] = useState(taskValue.isComplete);

  const dispatch = useAppDispatch();

  const handleChangeTask = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setTask(value);
  };

  const toggleIsTaskComplete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsTaskCompele(!isTaskComplete);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(taskValue.isComplete === isTaskComplete && taskValue.task === task)
    {
        unselectTask();
        close();
        return;
    }
    dispatch(
      updateTask({
        id: taskValue.id,
        task: task,
        isCompleted: isTaskComplete ? 1 : 0,
        username: taskValue.author,
      })
    ).then(() => {
      unselectTask();
    });
    close();
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(deleteTask({ id: taskValue.id, username: taskValue.author })).then(
      () => {
        unselectTask();
      }
    );
    close();
  };

  return (
    <form className="ToDoForm" onSubmit={submit}>
      <header className="ToDoForm ToDoForm__head">
        <h2>Modify or delete task</h2>
        <IconButton icon="cross" click={close} />
      </header>
      <h3>{taskValue.author}</h3>
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
          <TogleButton
            initState={isTaskComplete}
            click={toggleIsTaskComplete}
          />
        </label>
      </section>
      <section className="ToDoForm ToDoForm__buttons">
        <ThemedButton rest={{ type: "submit" }}>Submit</ThemedButton>
        <ThemedButton rest={{ onClick: handleDelete }}>Delete</ThemedButton>
      </section>
    </form>
  );
};

export default ToDoAddForm;
