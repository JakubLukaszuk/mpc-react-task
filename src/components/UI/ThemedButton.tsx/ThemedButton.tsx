import React, { ButtonHTMLAttributes } from 'react'
import './ThemedButton.css'

interface IThemedButton{
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement>,
    children: any
}

const ThemedButton: React.FC<IThemedButton> = (props) => {
    const {rest, children} = props;

    return (
        <button className="ThemedButton" {...rest}>
            {children}
        </button>
    )
}

export default ThemedButton
