import{ useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"

import "./Navbar.css"


const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return (
        <nav id="navbar">
            <ul>
                <li>
                    <h2><Link to="/">AppMastersGame</Link></h2>
                </li>
                <li>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Digite o nome do jogo" 
                            onChange={(e) => setSearch(e.target.value)}    
                            value={search}
                        />
                        <button type="submit">
                            <BiSearchAlt2 />
                        </button>
                    </form>
                </li>
                <li className="links">
                    <NavLink to="/Search">Search</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar