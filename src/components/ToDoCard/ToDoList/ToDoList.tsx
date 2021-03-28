import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { consts } from '../../../constants';
import { SelectedTask } from '../../../pages/ToDoPage';
import { getTasks } from '../../../slices/taskSlice';
import { RootState, useAppDispatch } from '../../../store';
import ToDoItem, { IToDoItem } from './ToDoItem/ToDoListItem';

interface IToDoList {
    setActiveItem:  (item : SelectedTask| null) => void
    selectedTaskId: string | null
}

const ToDoList : React.FC<IToDoList> = (props) => {
    const {setActiveItem, selectedTaskId} = props;
    const { tasks, isLoading, error } = useSelector((state: RootState) => state.task);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasks(consts.USER_NAME))
    }, [])

    return (
        <ul>
            {isLoading?
                <span>Loading...</span>:
            error?
                error:
            tasks.length?
                tasks.map(taskItem => <ToDoItem error = {taskItem.error} isSelected={taskItem.id == selectedTaskId ? true: false} author={taskItem.candidate} setSelected= {setActiveItem}  key={taskItem.id} id={taskItem.id} isComplete={taskItem.is_completed} isLoading = {taskItem.isLoading}>{taskItem.task}</ToDoItem>)
            : null}
        </ul>
    )
}

export default ToDoList
