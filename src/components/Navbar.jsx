import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                WATCHBLOG
            </Link>
            <div>
                <Link to="/">Inicio</Link>
                <Link to="/items">Relojes</Link>
            </div>
        </nav>
    )
}

export default Navbar