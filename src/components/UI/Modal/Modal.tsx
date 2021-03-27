import React from 'react'

interface IModal{
    isVisible: boolean,
    closeModal: (event:  React.MouseEvent<HTMLElement>) => void,
    children: any
}

const Modal:React.FC<IModal> = (props) => {
    const {isVisible, closeModal, children} = props;
    return (
        <div>
            {children}
        </div>
    )
}

export default Modal
