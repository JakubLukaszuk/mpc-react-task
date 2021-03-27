import React, { ButtonHTMLAttributes } from 'react'

interface IThemedButton{
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement>,
    children: any
}

const ThemedButton: React.FC<IThemedButton> = (props) => {
    const {rest, children} = props;

    return (
        <button {...rest}>
            {children}
        </button>
    )
}

export default ThemedButton
