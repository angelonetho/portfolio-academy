import { NavLink } from "react-router-dom"
import "../Home/style.css"

export function Home() {
    return(
        <div className="crt cover">
            <img src="/logo.svg"/>
            <nav className="buttons-container">
                <NavLink to={"/projects"}>
                <button>Projetos</button>
                </NavLink>
                
                <NavLink to={"/collection"} >
                <button>Coleções</button>
                </NavLink>
                <NavLink to={"/"}>
                <button>GitHub</button>
                </NavLink>
            </nav>
        </div>
    )
}