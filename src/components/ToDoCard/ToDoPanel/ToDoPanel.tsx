import React from 'react'
import IconButton from '../../UI/IconButton/IconButton'

const ToDoPanel = () => {
    return (
        <header>
           <IconButton click={()=>{}} icon="plus"/>
           <h1>To Do List</h1>
           <IconButton click={()=>{}} icon="gear"/>
        </header>
    )
}

export default ToDoPanel
