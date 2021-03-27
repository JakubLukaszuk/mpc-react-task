import React, { useState } from 'react'

interface ITogleButton{
    click: (event:  React.MouseEvent<HTMLElement>) => void,
    initState?: boolean
}

const TogleButton : React.FC<ITogleButton> = (props) => {
    const {click, initState = false} = props;
    const [isToggleOn, setTsToggleOn] = useState(initState);

    const handleClick = (event:  React.MouseEvent<HTMLElement>) => {
		setTsToggleOn(!isToggleOn);
        click(event);
	}

    return (
        <button onClick={handleClick}>
          {isToggleOn ? 'Done' : 'NotDone'}
        </button>
      );
}

export default TogleButton
