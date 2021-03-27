import { chdir } from 'process'
import React from 'react'

interface IToDoItem{
    children: string
    isLoading: boolean,
    id: string,
    isComplete: boolean
}

const ToDoItem:React.FC<IToDoItem> = (props) => {
    const {children, isLoading, id, isComplete} = props;
    return (
        <li>
            {children}
        </li>
    )
}

export default ToDoItem
