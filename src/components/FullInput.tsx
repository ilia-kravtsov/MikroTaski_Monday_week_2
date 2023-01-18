import React, {ChangeEvent, useState} from 'react';

type addMessageType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: addMessageType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onCLickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onCLickButtonHandler}>+</button>
        </div>
    );
};

