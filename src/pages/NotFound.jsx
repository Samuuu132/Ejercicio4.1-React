import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h1>404 - Página no encontrada</h1>
            <p>Esta página no existe.</p>
            <Link to="/">Ir al inicio</Link>
        </div>
    )
}

export default NotFound