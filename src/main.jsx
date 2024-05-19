import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rutas from "./Rutas"


// Lo que vamos a hacer aqui es importar y establecer las rutas
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Rutas></Rutas>
    </BrowserRouter>
)
