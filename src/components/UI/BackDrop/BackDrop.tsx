import React from 'react';
import './Backdrop.css';

interface IBackdrop{
    show: boolean,
    clicked: (event:  React.MouseEvent<HTMLElement>) => void
}

const BackDrop : React.FC<IBackdrop> = (props) => {
    const {show, clicked} = props;
    return (
        show ? <div className = "Backdrop" onClick={clicked}></div> : null
        )
}

export default BackDrop
