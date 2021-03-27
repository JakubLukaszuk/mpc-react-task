import React, { useState } from 'react'

interface ITogleButton{
    click: (event:  React.MouseEvent<HTMLElement>) => void,
    initState?: boolean
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const TogleButton : React.FC<ITogleButton> = (props) => {
    const {click, initState = false, rest} = props;
    const [isToggleOn, setTsToggleOn] = useState(initState);

    const handleClick = (event:  React.MouseEvent<HTMLElement>) => {
		setTsToggleOn(!isToggleOn);
        click(event);
	}

    return (
        <button {...rest} onClick={handleClick}>
          {isToggleOn ? 'Yes' : 'No'}
        </button>
      );
}

export default TogleButton
