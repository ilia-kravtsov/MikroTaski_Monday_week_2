import React, {ChangeEvent} from 'react';

export type InputType = {
    setTitle: (title: string) => void
    title: string
}

const Input = (props: InputType) => {

    const onChangeHadnler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeHadnler}/>
    );
};

export default Input;