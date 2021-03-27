import React from 'react'
import ToDoList from './ToDoList/ToDoList'
import ToDoPanel from './ToDoPanel/ToDoPanel'

const ToDoCard = () => {
    return (
        <div>
            <ToDoPanel/>
            <ToDoList/>
        </div>
    )
}

export default ToDoCard
