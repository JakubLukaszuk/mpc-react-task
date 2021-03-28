import React from 'react'
import { SelectedTask, ToDoModalState } from '../../pages/ToDoPage'
import ToDoList from './ToDoList/ToDoList'
import ToDoPanel from './ToDoPanel/ToDoPanel'
import './ToDoCard.css'

interface IToDoCard {
    openModal: (modalType: ToDoModalState) => void
    setSelectedTask: (task: SelectedTask| null) => void
    selectedTaskId: string| null
}

const ToDoCard : React.FC<IToDoCard> = (props) => {
    const {openModal, setSelectedTask, selectedTaskId} = props;
    return (
        <div className="ToDoCard">
            <ToDoPanel openModal = {openModal}/>
            <ToDoList setActiveItem = {setSelectedTask} selectedTaskId={selectedTaskId} />
        </div>
    )
}

export default ToDoCard
