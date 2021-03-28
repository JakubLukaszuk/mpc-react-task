import classNames from 'classnames';
import React from 'react'
import { SelectedTask } from '../../../../pages/ToDoPage';
import CheckMark from '../../../UI/CheckMark/CheckMark';
import './ToDoListItem.css'

export interface IToDoItem{
    children: string
    isLoading: boolean
    id: string
    isComplete: boolean
    author: string
    setSelected:  (item : SelectedTask| null) => void
    isSelected: boolean
    error?: string
}

const ToDoItem:React.FC<IToDoItem> = (props) => {
    const {children, isLoading, id, author, isComplete, setSelected, isSelected, error} = props;
    const classes = classNames({
        'ToDoListItem': true,
        'ToDoListItem--selected': isSelected,
        'ToDoListItem--compelete': isComplete
    })
    return (
        <li className={classes} onClick={() => setSelected({task: children, isComplete: isComplete, author: author, id: id})}>
           <CheckMark isChecked={isComplete}/> <div className="ToDoListItem__separator"/> {isLoading? "Loading..." : error? error: children}
        </li>
    )
}

export default ToDoItem
