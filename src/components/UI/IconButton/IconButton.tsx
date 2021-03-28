import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

interface IIconButton{
    click: (event:  React.MouseEvent<HTMLElement>) => void,
    icon: "gear" | "plus" | "cross"
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const IconButton:React.FC<IIconButton> = (props) => {
    const {click, icon, rest} = props;

    return (
        <button {...rest} onClick={click}>
            <FontAwesomeIcon size="1x" icon={icon == "gear"?
             faCog : icon == "plus"?
              faPlus : icon == "cross"? faTimes: faTimes} />
        </button>
    )
}

export default IconButton
