import '../assets/styles/simulation.css'
import { useState, useEffect, useRef } from 'react';
import RoboDk from '../assets/images/Robodk.png'

function Simulation(){
    const [phrase, setPhrase] = useState("");
        const [line, setLine] = useState(" |");
        let i = useRef(0);
        let phraseI = "Para simplificar los cálculos de cinemática inversa, el proyecto integra RoboDK, que permite visualizar los movimientos y verificar los ángulos articulares (θ1, θ2,…, θ6) antes de ejecutar los movimientos en el hardware. Esto facilita la validación de trayectorias y evita errores en la orientación final del efector.";
        useEffect(() => {
            let interval;
            const startTyping = () => {
                interval = setInterval(() => {
                    const index = i.current;
                    setPhrase((prev) => prev + phraseI[index]);
                        i.current = index + 1;
                        if (i.current === phraseI.length) {
                            clearInterval(interval);
                            setLine("");
                        }
                }, 60);
            }
            startTyping(); 
            return () => clearInterval(interval); 
        }, []);
    return(
        <div className="Basic-sensors-container">
            <div className='Text-content'>
                <h1 className='Title-description'>Simulación y cinemática</h1>
                <div className='Robo-container'>
                    <img src={RoboDk} className='Robo-img'></img>
                </div>
                <div className='Container'>
                    <p className='Text-info'>{phrase}{line}</p>
                </div>
            </div>
        </div>
    );
}
export default Simulation;