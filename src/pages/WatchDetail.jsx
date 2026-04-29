import { useParams, Link } from 'react-router-dom'
import { watches } from '../data/watches'

function WatchDetail() {
    const { id } = useParams()
    const watch = watches.find(w => w.id === Number(id))

    if (!watch) {
        return (
            <div className="page">
                <h1>Reloj no encontrado</h1>
                <Link to="/items">Volver al listado</Link>
            </div>
        )
    }

    return (
        <div className="detail-page">
            <Link to="/items" className="btn-back">← Volver al listado</Link>

            <div className="detail-grid">
                {/* Imagen */}
                <div className="detail-image">
                    <img
                        src={watch.image}
                        alt={`${watch.brand} ${watch.model}`}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>

                {/* Info */}
                <div className="detail-info">
                    <p style={{ fontSize: '0.85rem', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {watch.brand}
                    </p>
                    <h1>{watch.brand} {watch.model}</h1>

                    <p className="detail-price">${watch.price.toLocaleString()}</p>

                    <span className="detail-type">{watch.type}</span>

                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '0.6rem 0', color: '#999', fontSize: '0.85rem' }}>Marca</td>
                                <td style={{ padding: '0.6rem 0', fontWeight: '600' }}>{watch.brand}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '0.6rem 0', color: '#999', fontSize: '0.85rem' }}>Modelo</td>
                                <td style={{ padding: '0.6rem 0', fontWeight: '600' }}>{watch.model}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '0.6rem 0', color: '#999', fontSize: '0.85rem' }}>Tipo</td>
                                <td style={{ padding: '0.6rem 0', fontWeight: '600' }}>{watch.type}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.6rem 0', color: '#999', fontSize: '0.85rem' }}>Precio</td>
                                <td style={{ padding: '0.6rem 0', fontWeight: '600' }}>${watch.price.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>

                    <p><strong>Descripción:</strong> {watch.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WatchDetail