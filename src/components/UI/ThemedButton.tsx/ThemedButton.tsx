import classNames from 'classnames';
import React from 'react'
import './ThemedButton.css'

interface IThemedButton{
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement>,
    children: any
    isDanger?: boolean
}

const ThemedButton: React.FC<IThemedButton> = (props) => {
    const {rest, children, isDanger} = props;

    const classes = classNames({
        'ThemedButton': true,
        'ThemedButton--danger': isDanger,
    })

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    )
}

export default ThemedButton
