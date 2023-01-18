import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import Button from "./components/Button";
import Input from "./components/Input";



function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

    let [title, setTitle] = useState('')
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const onCLickButtonHandlerApp = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            <Input title={title} setTitle={setTitle}/>
            <Button name={'add me'} onCLickButtonHandlerApp={onCLickButtonHandlerApp}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}


export default App;

/*
     <input onChange={onChangeInputHandler}/>
      const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            console.log(event.currentTarget.value)
      } - выводит в лог значение которое мы вводим в input
      const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.currentTarget.value) - записывает локальный стейт то есть в текущее значение title
      }

      Как по нажатию кнопки отрисовать значение из поля

      1 действие в подкомпоненте
       <button onClick={onCLickButtonHandler}>+</button>

      2 действие в родителе
       const addMessage = (title: string) => {
            console.log(title)
        }

      3 действие в родителе
      передаем через пропсы в подкомпоненту функцию
      <FullInput addMessage={addMessage}/>

      4 действие в подкомпоненте
        type addMessageType = {
            addMessage: (title: string) => void
        }

      5 действие в подкмпоненте
      export const FullInput = (props: addMessageType) => {

      6 действие в подкомпоненте
      const onCLickButtonHandler = () => {
            props.addMessage(title)
        }
      7 действие в родителе
      тестируем отрисовку
      const addMessage = (title: string) => {
            let newMessage = {message: 'new_message'}
            setMessage([newMessage, ...message])
        }
      8 действие передаем title вместо строки
       const addMessage = (title: string) => {
            let newMessage = {message: title}
            setMessage([newMessage, ...message])
        }
       it works!

       Как сделать чтобы после отправки поле очищалось
        const onCLickButtonHandler = () => {
            props.addMessage(title)
            setTitle('')
        }
         <input value={title} onChange={onChangeInputHandler}/>
         it works!



        Вариант когда локальный стейт создаем в App

        Final version

        function App() {
        const [message, setMessage] = useState([
                {message: 'message1'},
                {message: 'message2'},
                {message: 'message3'},
            ]
        )

        let [title, setTitle] = useState('')
        const addMessage = (title: string) => {
            let newMessage = {message: title}
            setMessage([newMessage, ...message])
        }

        const onCLickButtonHandlerApp = () => {
            addMessage(title)
            setTitle('')
        }

        return (
            <div className="App">
    <Input title={title} setTitle={setTitle}/>
    <Button name={'add me'} onCLickButtonHandlerApp={onCLickButtonHandlerApp}/>
    {message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )
    })}
    </div>
    );
    }


    export default App;


    Input.tsx

    import React, {ChangeEvent} from 'react';

export type InputType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = (props: InputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

    Button.tsx
    import React, {useState} from 'react';

type ButtonType = {
    name: string
    onCLickButtonHandlerApp: () => void

}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.onCLickButtonHandlerApp()
    }

    return (
        <button onClick={onClickHandler}>{props.name }</button>
    );
};
*/