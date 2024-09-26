import "./style.css"

export function Home() {
    return(
        <div className="crt cover">
            <img src="/logo.svg"/>
            <nav className="buttons-container">
                <button>Projetos</button>
                <button>Coleções</button>
                <button>GitHub</button>
            </nav>
        </div>
    )
}