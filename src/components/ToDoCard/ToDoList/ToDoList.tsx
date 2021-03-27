import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { consts } from '../../../constants';
import { getTasks } from '../../../slices/taskSlice';
import { RootState, useAppDispatch } from '../../../store';

import ToDoItem from './ToDoItem/ToDoItem';

const ToDoList = () => {
    const { tasks, isLoading } = useSelector((state: RootState) => state.task);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasks(consts.USER_NAME))
    }, [])

    return (
        <ul>
            {isLoading? <span>Loading...</span>:
                tasks.map(taskItem => <ToDoItem key={taskItem.id} id={taskItem.id} isComplete={taskItem.is_completed} isLoading = {taskItem.isLoading}>{taskItem.task}</ToDoItem>)}
        </ul>
    )
}

export default ToDoList
