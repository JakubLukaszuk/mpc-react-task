import classNames from 'classnames';
import React, { useState } from 'react';
import './ToggleButton.css'

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

  const classes = classNames({
    'ToggleButton': true,
    'ToggleButton--on': isToggleOn,
})

    return (
        <button className={classes} {...rest} onClick={handleClick}>
          {isToggleOn ? 'Yes' : 'No'}
        </button>
      );
}

export default TogleButton
