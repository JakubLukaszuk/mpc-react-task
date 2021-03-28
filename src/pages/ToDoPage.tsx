import React, { useState } from "react";
import ToDoCard from "../components/ToDoCard/ToDoCard";
import ToDoAddForm from "../components/ToDoCard/ToDoForm/AddForm/AddForm";
import ToDoModifyForm from "../components/ToDoCard/ToDoForm/ModifyForm/ModifyForm";
import Modal from "../components/UI/Modal/Modal";
import './ToDoPage.css'
import { consts } from "../constants";

export type ToDoModalState = "add" | "modify" | null;
export type SelectedTask = {
  task: string;
  isComplete: boolean;
  author: string;
  id: string;
};

const ToDoPage = () => {
  const [modalState, setModalState] = useState<ToDoModalState>(null);
  const [selectedTask, setSelectedTask] = useState<SelectedTask | null>(null);

  const closeModal = () => {
    setModalState(null);
  };
  const openModal = (modalType: ToDoModalState) => {
      if(!selectedTask && modalType=="modify")
      {
        return;
      }
      setModalState(modalType);
  };

  const unselectTask = () =>{
      setSelectedTask(null);
  }

  return (
    <div className="ToDoPage">
      <section className="ToDoPage ToDoPage__todos">
        <ToDoCard
          openModal={openModal}
          setSelectedTask={setSelectedTask}
          selectedTaskId={selectedTask?.id ? selectedTask?.id : null}
        />
        <Modal
          closeModal={closeModal}
          isVisible={modalState != null ? true : false}
        >
          {modalState === "add" ? (
              <ToDoAddForm close={closeModal} userName={consts.USER_NAME} />
          ) : modalState === "modify" && selectedTask ? (
              <ToDoModifyForm close={closeModal} taskValue={selectedTask} unselectTask={unselectTask} />
          ) : null}
        </Modal>
      </section>
    </div>
  );
};

export default ToDoPage;
