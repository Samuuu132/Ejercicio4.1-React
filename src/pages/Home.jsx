import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1> WatchBlog</h1>
            <p>Bienvenido al blog de relojes. Reviews honestas de los mejores relojes del mundo.</p>
            <Link to="/items">Ver todos los relojes</Link>
        </div>
    )
}

export default Home