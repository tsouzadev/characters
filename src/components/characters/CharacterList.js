import React, {useState} from 'react';

import style from './CharacterList.module.css';

import Card from '../ui/Card';
import CharacterItem from './CharacterItem';

const CharacterList = (props) => {

    const [characters, setCharacters] = useState([]);

    if(!(props.characters.length > 0)) {
        return (
        <Card className={style['character-list']}>
            <h3>No characters found.</h3>
        </Card>);
    }

    return (
        <Card className={style['character-list']}>
            {props.characters.map(character => <CharacterItem key={character.id} character={character}/>)}
        </Card>
    );
};

export default CharacterList;