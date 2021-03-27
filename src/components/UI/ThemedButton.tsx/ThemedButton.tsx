import React from 'react'

interface IThemedButton{
    click: (event:  React.MouseEvent<HTMLElement>) => void,
}

const ThemedButton: React.FC<IThemedButton> = (props) => {
    const {click} = props;
    return (
        <button>
            
        </button>
    )
}

export default ThemedButton
