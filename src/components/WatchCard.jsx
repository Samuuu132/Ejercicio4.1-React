import { Link } from 'react-router-dom'

function WatchCard({ watch }) {
    return (
        <div className="watch-card">
            {watch.image ? (
                <img
                    src={watch.image}
                    alt={`${watch.brand} ${watch.model}`}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '0.75rem' }}
                />
            ) : (
                <div style={{ width: '100%', height: '200px', background: '#f0f0f0', borderRadius: '4px', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>

                </div>
            )}
            <h2>{watch.brand} {watch.model}</h2>
            <p>{watch.type}</p>
            <p className="price">${watch.price.toLocaleString()}</p>
            <Link to={`/items/${watch.id}`} className="ver-detalle">Vista previa</Link>
        </div>
    )
}

export default WatchCard