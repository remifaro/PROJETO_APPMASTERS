const JogoCard = ({jogo}) => {
  return (
    <div className="jogo-card">
    <img src={jogo.thumbnail} alt={jogo.name} />
    <h2>{jogo.title}</h2>
    <p>{jogo.genre}</p>
    </div>
  )
}

export default JogoCard