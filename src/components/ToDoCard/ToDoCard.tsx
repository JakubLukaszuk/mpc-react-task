import React from 'react'
import { SelectedTask, ToDoModalState } from '../../pages/ToDoPage'
import Modal from '../UI/Modal/Modal'
import ToDoList from './ToDoList/ToDoList'
import ToDoPanel from './ToDoPanel/ToDoPanel'

interface IToDoCard {
    openModal: (modalType: ToDoModalState) => void
    setSelectedTask: (task: SelectedTask| null) => void
    selectedTaskId: string| null
}

const ToDoCard : React.FC<IToDoCard> = (props) => {
    const {openModal, setSelectedTask, selectedTaskId} = props;
    return (
        <div>
            <ToDoPanel openModal = {openModal}/>
            <ToDoList setActiveItem = {setSelectedTask} selectedTaskId={selectedTaskId} />
        </div>
    )
}

export default ToDoCard
