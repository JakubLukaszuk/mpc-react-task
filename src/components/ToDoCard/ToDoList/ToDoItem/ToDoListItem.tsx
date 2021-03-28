import classNames from 'classnames';
import React from 'react'
import { SelectedTask } from '../../../../pages/ToDoPage';
import './ToDoListItem.css'

export interface IToDoItem{
    children: string
    isLoading: boolean
    id: string
    isComplete: boolean
    author: string
    setSelected:  (item : SelectedTask| null) => void
    isSelected: boolean
}

const ToDoItem:React.FC<IToDoItem> = (props) => {
    const {children, isLoading, id, author, isComplete, setSelected, isSelected} = props;
    const classes = classNames({
        'ToDoListItem': true,
        'ToDoListItem--selected': isSelected,
        'ToDoListItem--notSelected': !isSelected
    })
    return (
        <li className={classes} onClick={() => setSelected({task: children, isComplete: isComplete, author: author, id: id})}>
            {isLoading? "Loading..." : children}
        </li>
    )
}

export default ToDoItem
