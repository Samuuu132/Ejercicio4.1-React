import { Link } from 'react-router-dom'
import { watches } from '../data/watches'

function Home() {
    const featured = watches.slice(0, 3)

    return (
        <div>
            {/* Hero */}
            <div className="hero">
                <h1> WatchBlog</h1>
                <p>Explora los mejores relojes del mundo</p>
            </div>

            {/* Relojes destacados */}
            <div className="page">
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                    Algunos relojes destacados
                </h2>

                <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    {featured.map(watch => (
                        <div key={watch.id} className="watch-card">
                            <img
                                src={watch.image}
                                alt={`${watch.brand} ${watch.model}`}
                                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '0.75rem' }}
                            />
                            <h2>{watch.brand} {watch.model}</h2>
                            <p>{watch.type}</p>
                            <p className="price">${watch.price.toLocaleString()}</p>
                            <Link to={`/items/${watch.id}`} className="ver-detalle">Detalles</Link>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/items" className="btn-primary">Ver todos los relojes</Link>
                </div>
            </div>
        </div>
    )
}

export default Home