import React from 'react';

import style from './CharacterItem.module.css';

import Card from '../ui/Card';


const CharacterItem = (props) => {
    return (
        <Card className={style['character-item']}>
            <p>{`${props.character.username} - ${props.character.age} year(s) old.`}</p>
        </Card>
    );
};

export default CharacterItem;