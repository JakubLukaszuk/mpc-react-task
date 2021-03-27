import React from 'react'
import { ToDoModalState } from '../../pages/ToDoPage'
import Modal from '../UI/Modal/Modal'
import ToDoList from './ToDoList/ToDoList'
import ToDoPanel from './ToDoPanel/ToDoPanel'

interface IToDoCard {
    openModal: (modalType: ToDoModalState) => void
}

const ToDoCard : React.FC<IToDoCard> = (props) => {
    const {openModal} = props;
    return (
        <div>
            <ToDoPanel openModal = {openModal}/>
            <ToDoList/>
        </div>
    )
}

export default ToDoCard
