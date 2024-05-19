import { App } from "./App";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Extincion from './extincion';

// Lo que vamos a hacer aqui es importar y establecer las rutas
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
                <Route path="/" element={<App />} />
                <Route path='/extincion' element={<Extincion />} />
    </Routes>
    </BrowserRouter>
);