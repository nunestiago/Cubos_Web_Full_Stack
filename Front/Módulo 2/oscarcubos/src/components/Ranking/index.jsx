import { useEffect, useState } from 'react';
import './style.css';

export default function Ranking({ characters, sortCharByVotes }) {
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    const localCharacter = [...characters];
    const ordered = localCharacter.sort(sortCharByVotes);
    setRanking(ordered);
  }, [characters]);
  function sortCharByVotes(a, b) {
    return b.votes > a.votes;
  }
  return (
    <div className="container-ranking">
      <h3>Ranking</h3>
      {ranking.map((item) => (
        <div className="character-ranking">
          <strong>{item.name}</strong>
          <strong>{item.votes}</strong>
        </div>
      ))}
    </div>
  );
}
