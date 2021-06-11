import './style.css';
export default function Card({ characters, handleAddVote, showButtons }) {
  return (
    <>
      {characters.map((char) => (
        <div className="card" key={char.id}>
          <h3>{char.name}</h3>
          <img src={char.img} alt="" className="img-character" />
          {showButtons && (
            <div className="buttons-card">
              <button
                className="button-green"
                onClick={() => handleAddVote(1, char.id)}
              >
                +
              </button>
              <button
                className="button-red"
                onClick={() => handleAddVote(-1, char.id)}
              >
                -
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
