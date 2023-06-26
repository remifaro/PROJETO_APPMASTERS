import '../pages/JogoGrid.css'

import JogoCard from "../components/JogoCard"

import { useState, useEffect } from 'react'


const Home = () => {
    const [jogos, setJogos] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {

            setLoading(true);

            const res = await fetch("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/", {
                method: "GET",
                headers: {"dev-email-address": "461summer@gmail.com"}
            });
            const data = await res.json();
            setJogos(data);

            setLoading(false);

        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Lista de Jogos</h1>
            {loading && <p>Aguarde enquanto estamos carregando os dados...</p>}
            <ul className="jogos-container">
                {jogos.length > 0 && jogos.map((jogo) => <JogoCard key={jogo.id} jogo={jogo}/>)}
            </ul>
        </div>
    );
}

export default Home