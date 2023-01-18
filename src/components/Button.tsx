import React from 'react';

type ButtonType = {
    name: string
    onCLickButtonHandlerApp: () => void
}

const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.onCLickButtonHandlerApp()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;

