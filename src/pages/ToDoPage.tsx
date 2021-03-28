import React, { useState }  from 'react'
import ToDoCard from '../components/ToDoCard/ToDoCard'
import ToDoAddForm from '../components/ToDoCard/ToDoForm/AddForm/AddForm'
import { IToDoItem } from '../components/ToDoCard/ToDoList/ToDoItem/ToDoListItem'
import Modal from '../components/UI/Modal/Modal'
import { consts } from '../constants'

export type ToDoModalState = "add"| "modify" | null
export type SelectedTask = {task: string, isComplete: boolean, author: string, id: string}

const ToDoPage = () => {

    const [modalState, setModalState] = useState<ToDoModalState>(null)
    const [selectedTask, setSelectedTask] = useState<SelectedTask| null>(null);

    const closeModal = () => {
        setModalState(null)
    }
    const openModal = (modalType: ToDoModalState) => {
        setModalState(modalType);
    }

    return (
        <div>
            <section>
                <ToDoCard openModal = {openModal} setSelectedTask={setSelectedTask} selectedTaskId = {selectedTask?.id? selectedTask?.id: null}/>
                <Modal closeModal={closeModal} isVisible = {modalState!== null? true: false}>
                    {modalState === "add"? <div>
                        <header>
                            <h2>Add new tak</h2>
                        </header>
                        <ToDoAddForm close={closeModal} userName={consts.USER_NAME}/>
                    </div>: modalState === "modify"? null: null}
                </Modal>
            </section>
        </div>
    )
}

export default ToDoPage
