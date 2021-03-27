import React, { useState }  from 'react'
import ToDoCard from '../components/ToDoCard/ToDoCard'
import ToDoAddForm from '../components/ToDoCard/ToDoForm/AddForm/AddForm'
import Modal from '../components/UI/Modal/Modal'
import { consts } from '../constants'

export type ToDoModalState = "add"| "modify" | null

const ToDoPage = () => {
    const [modalState, setModalState] = useState<ToDoModalState>(null)

    const closeModal = () => {
        setModalState(null)
    }
    const openModal = (modalType: ToDoModalState) => {
        setModalState(modalType);
    }

    return (
        <div>
            <section>
                <ToDoCard openModal = {openModal}/>
                <Modal closeModal={closeModal} isVisible = {modalState!== null? true: false}>
                    {modalState === "add"? <div>
                        <header>
                            <h2>Add new tak</h2>
                        </header>
                        <ToDoAddForm userName={consts.USER_NAME}/>
                    </div>: modalState === "modify"? null: null}
                </Modal>
            </section>
        </div>
    )
}

export default ToDoPage
