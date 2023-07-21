import React, {useState} from 'react';

import './App.css';

import CreateCharacter from './components/characters/CreateCharacter';
import CharacterList from './components/characters/CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  const CharacterCreatedHandler = (character) => {
    console.log(character);
    setCharacters((previous) => {
      return [...previous, character];
    });
  };

  return (
    <div className="App">
      <CreateCharacter onCharactercreated={CharacterCreatedHandler}/>
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;
