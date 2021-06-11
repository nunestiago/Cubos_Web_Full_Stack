import { useState, useEffect } from 'react';
import './style.css';
import Card from '../Card';

export default function Podium({ characters, sortCharByVotes }) {
  const [podium, setPodium] = useState([]);
  useEffect(() => {
    const localCharacter = [...characters];
    const ordered = localCharacter.sort(sortCharByVotes).slice(0, 3);
    setPodium(ordered);
  }, [characters]);
  return (
    <>
      <div className="container-podium">
        <Card characters={podium} />
      </div>
    </>
  );
}
