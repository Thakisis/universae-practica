import Secundarias from './secundarias';

const Extincion = () => {
    const texto = (
        <div>
            <h3>Mantenimiento de los equipos y herramientas de extinción de incendios forestales.</h3>
            <p>Asignatura: Gestión de recursos de emergencias y protección civil.</p>
            <p>Unidad: Planificación y supervisión del mantenimiento de equipos, medios técnicos e instalaciones.</p>
            <p>Duración aproximada: 10 minutos.</p>
            <p>Dificultad: Fácil.</p>
        </div>
    );

    const juegoUrl = "https://html-classic.itch.zone/html/8561483/index.html";

    const imagenes = [
        '../img/juegos/Miniaturas/Ascensor/Ascensor0.png',
        '../img/juegos/Miniaturas/Ascensor/Ascensor1.png',
        '../img/juegos/Miniaturas/Ascensor/Ascensor2.png',
    ];

    return (
        <div>
            <Secundarias images={imagenes} texto={texto} juegoUrl={juegoUrl} />
        </div>
    );
}

export default Extincion;