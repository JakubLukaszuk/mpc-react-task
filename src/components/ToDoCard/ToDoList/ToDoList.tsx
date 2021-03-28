import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { consts } from '../../../constants';
import { SelectedTask } from '../../../pages/ToDoPage';
import { getTasks } from '../../../slices/taskSlice';
import { RootState, useAppDispatch } from '../../../store';
import ToDoItem, { IToDoItem } from './ToDoItem/ToDoListItem';

interface IToDoList {
    setActiveItem:  (item : SelectedTask| null) => void
    selectedTaskId: string| null
}

const ToDoList : React.FC<IToDoList> = (props) => {
    const {setActiveItem, selectedTaskId} = props;
    const { tasks, isLoading } = useSelector((state: RootState) => state.task);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasks(consts.USER_NAME))
    }, [])

    return (
        <ul>
            {isLoading? <span>Loading...</span>:
                tasks.map(taskItem => <ToDoItem isSelected={taskItem.id == selectedTaskId ? true: false} author={taskItem.candidate} setSelected= {setActiveItem}  key={taskItem.id} id={taskItem.id} isComplete={taskItem.is_completed} isLoading = {taskItem.isLoading}>{taskItem.task}</ToDoItem>)}
        </ul>
    )
}

export default ToDoList
