import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import Card from './components/Card/index';
import Ranking from './components/Ranking/index';
import Podium from './components/Podium/index';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    handlePopulateCharacters();
  }, []);

  async function handlePopulateCharacters() {
    const response = await fetch(
      'https://www.breakingbadapi.com/api/characters?limit=10',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const data = await response.json();
    const formattedCharacters = [];
    for (const char of data) {
      formattedCharacters.push({
        id: char.char_id,
        name: char.name,
        img: char.img,
        votes: 0,
      });
    }
    setCharacters(formattedCharacters);
  }

  function handleAddVote(value, id) {
    const localCharacter = [...characters];
    const indexChar = localCharacter.findIndex((item) => item.id === id);
    if (indexChar === -1) return;

    const newCountVotes = localCharacter[indexChar].votes + value;
    if (newCountVotes >= 0) {
      localCharacter[indexChar].votes = newCountVotes;
    }
    setCharacters([...localCharacter]);
  }

  function sortCharByVotes(a, b) {
    return b.votes > a.votes;
  }
  return (
    <div className="App">
      <Navbar />
      <h1>Podium</h1>
      <Podium characters={characters} sortCharByVotes={sortCharByVotes} />
      <h1>Vote no seu personagem</h1>
      <div className="container">
        <div className="character-list">
          <Card
            characters={characters}
            handleAddVote={handleAddVote}
            showButtons
          />
        </div>
        <Ranking characters={characters} sortCharByVotes={sortCharByVotes} />
      </div>
    </div>
  );
}

export default App;
