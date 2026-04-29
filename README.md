# 🕰️ WatchBlog

Mini-blog de relojes construido con Vite + React + React Router v6.

## Nivel: Mid (85 pts)

## Cómo correr el proyecto

```bash
git clone https://github.com/Samuuu132/Ejercicio4.1-React.git
cd Ejercicio4.1-React/watchblog
npm install
npm run dev
```

Abre http://localhost:5173 en el navegador.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con relojes destacados |
| `/items` | Listado completo con buscador |
| `/items/:id` | Detalle de un reloj |
| `*` | Página 404 |

## Componente reutilizable: WatchCard

Ubicación: `src/components/WatchCard.jsx`

Tarjeta que muestra la información de un reloj y navega a su detalle al hacer clic.

### Props

| Prop | Tipo | Requerido | Descripción |
|------|------|:---------:|-------------|
| `watch` | `object` | ✅ | Objeto del reloj |
| `watch.id` | `number` | ✅ | ID único del reloj |
| `watch.brand` | `string` | ✅ | Marca del reloj |
| `watch.model` | `string` | ✅ | Modelo del reloj |
| `watch.type` | `string` | ✅ | Tipo de reloj |
| `watch.image` | `string` | ✅ | URL de la imagen |

### Ejemplo de uso

```jsx
import WatchCard from './components/WatchCard'

<WatchCard watch={watch} />
```

## Requerimientos Mid completados

- ✅ Página 404
- ✅ Búsqueda en el listado
- ✅ Botón aleatorio con useNavigate
- ✅ Componente reutilizable WatchCard con props documentadas
