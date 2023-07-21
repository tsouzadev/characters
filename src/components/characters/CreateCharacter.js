import React, {useState} from 'react'

import style from './CreateCharacter.module.css';

import Card from '../ui/Card';

const CreateCharacter = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);

    const usernameChangeHandler = (evt) => {
        setUsername(evt.target.value);
    };

    const ageChangeHandler = (evt) => {
        setAge(evt.target.value);
    };

    const CreateCharacterHandler =  (evt) => {
        evt.preventDefault();
        console.log(evt);
        const character = {
            id: Math.random(),
            username: username,
            age: age
        };

        props.onCharactercreated(character);

        setUsername('');
        setAge(0);
    };

    return (
        <Card className={style['create-character']}>
            <form onSubmit={CreateCharacterHandler}>

                <div className={style['form-control']}>
                    <label htmlFor="username" >Username</label>
                    <input onChange={usernameChangeHandler} value={username} type="text" name="username" required/>
                </div>

                <div className={style['form-control']}>
                    <label htmlFor="age" >Age (Years)</label>
                    <input onChange={ageChangeHandler} value={age} type="number" name="age" min="0" required/>
                </div>

                <div className={style['form-actions']}>
                    <button type="submit" className={style['create-button']}>Create</button>
                </div>

            </form>
        </Card>
    );
}

export default CreateCharacter;