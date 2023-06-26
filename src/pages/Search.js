import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JogoCard from "../components/JogoCard"

import "./JogoGrid.css";

const Search = () => {

  const [searchParams] = useSearchParams();

  const [jogos, setJogos] = useState([]);
  const query = searchParams.get("q");

  const getSearchedJogos = async (url) => {
    const res = await fetch("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/",{
        method:"GET",
        headers: {"dev-email-address": "461summer@gmail.com"}
    });
    const data = await res.json();
    setJogos(data.results);
}

useEffect(() => {
       const searchWithQueryURL = `${searchURL}?${jogo.id}&query=${query}`;
       getSearchedJogos(searchWithQueryURL);
}, [query]);

  return (
    <div className="container">
            <h1 className="title">Resultados para: <span className="query-text">{query}</span></h1>
            <ul className="jogos-container">
                {jogos.length === 0 && <p>Carregando...</p>}
                {jogos.length > 0 && jogos.map((jogo) => <JogoCard key={jogo.id} jogo={jogo}/>)}
            </ul>
        </div>
  )
};

export default Search;