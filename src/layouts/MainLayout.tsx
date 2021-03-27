import React, { ReactNode, useEffect,  } from 'react';


interface IMainLayoutProps {
    children: ReactNode
}

const MainLatout: React.FC<IMainLayoutProps> = (props) => {
    const { children } = props;

    useEffect(() => {
    }, [])

    return (
        <React.Fragment>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default MainLatout