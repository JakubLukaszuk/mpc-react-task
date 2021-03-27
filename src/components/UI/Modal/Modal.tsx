import React from 'react'
import classNames from 'classnames';
import './Modal.css'
import BackDrop from '../BackDrop/BackDrop';

interface IModal{
    isVisible: boolean,
    closeModal: (event:  React.MouseEvent<HTMLElement>) => void,
    children: any
}

const Modal:React.FC<IModal> = (props) => {
    const {isVisible, closeModal, children} = props;

    const classes = classNames({
        'Modal': true,
        'Modal--open': isVisible,
        'Modal--close': !isVisible
    })

    return (
        <React.Fragment>
            <BackDrop show={isVisible} clicked={closeModal} />
            <div className={classes}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Modal
