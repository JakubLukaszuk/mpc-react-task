import React from 'react'
import { ToDoModalState } from '../../../pages/ToDoPage';
import IconButton from '../../UI/IconButton/IconButton';
import './ToDoPanel.css'

interface IToDoPanel {
    openModal: (modalType: ToDoModalState) => void
}

const ToDoPanel: React.FC<IToDoPanel> = (props) => {
    const {openModal} = props;
    return (
        <header className="ToDoPanel">
           <IconButton click={()=>{openModal("add")}} icon="plus"/>
           <h1>To Do List</h1>
           <IconButton click={()=>{openModal("modify")}} icon="gear"/>
        </header>
    )
}

export default ToDoPanel
