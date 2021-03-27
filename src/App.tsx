import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { RootState, useAppDispatch } from './store';
import {getTasks, addTask, deleteTask} from './slices/taskSlice';

function App() {
  const { tasks, isLoading } = useSelector((state: RootState) => state.task);
  const dispatch = useAppDispatch();
  const surenameName = "Jakub.Łukaszuk";

  useEffect(() => {
    dispatch(addTask({username: surenameName, task: "task test", isCompleted: 1}))
    .then(resolved=> dispatch(getTasks(surenameName)))
      .then(getTasksResponse=> {
        if(typeof getTasksResponse.payload === 'string' || getTasksResponse.payload instanceof String || getTasksResponse.payload === undefined )
        {
          return
        }
        dispatch(deleteTask({id: getTasksResponse.payload[0].id, username: surenameName}))
      })
  }, [])

  return (
    <div className="App">
      {tasks.map((task, index)=>(
        <p key={index}>{task.task}</p>
      ))}
      {isLoading? <p>loading...</p> : null}
    </div>
  );
}

export default App;
