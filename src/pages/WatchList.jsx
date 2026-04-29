import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { watches } from '../data/watches'
import WatchCard from '../components/WatchCard'

function WatchList() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const goToRandom = () => {
        const random = watches[Math.floor(Math.random() * watches.length)]
        navigate(`/items/${random.id}`)
    }

    const filtered = watches.filter(watch =>
        watch.brand.toLowerCase().includes(search.toLowerCase()) ||
        watch.model.toLowerCase().includes(search.toLowerCase()) ||
        watch.type.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="page">
            <h1>Todos los relojes</h1>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar por marca, modelo o tipo..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="btn-random" onClick={goToRandom}>
                    Reloj aleatorio
                </button>
            </div>

            <p>{filtered.length} relojes encontrados</p>

            <div className="cards-grid">
                {filtered.map(watch => (
                    <WatchCard key={watch.id} watch={watch} />
                ))}
            </div>

            {filtered.length === 0 && (
                <p>No se encontraron relojes para "{search}"</p>
            )}
        </div>
    )
}

export default WatchList