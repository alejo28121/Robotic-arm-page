import '../assets/styles/sensors.css'
import { useState, useEffect, useRef } from 'react';

function Sensors(){
    const [phrase, setPhrase] = useState("");
        const [line, setLine] = useState(" |");
        let i = useRef(0);
        let phraseI = "El sistema emplea sensores giroscópicos y acelerómetros para medir variables fundamentales de la mecánica del movimiento: Aceleración lineal (a) a = ∆v / ∆t. Velocidad angular (ω) ω = ∆θ / ∆t. Aceleración angular (α) α = ∆ω / ∆t. Fuerza (F) F = m · a. Torque (τ) τ = F · r. Estas mediciones permiten analizar movimiento, velocidad, aceleración y fuerza en tiempo real, mejorando el control dinámico del brazo.";
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
                }, 40);
            }
            startTyping(); 
            return () => clearInterval(interval); 
        }, []);
    return(
        <div className="Basic-sensors-container">
            <div className='Text-content'>
                <h1 className='Title-description'>Sensores y control</h1>
                <div className='Container'>
                    <p className='Text-sensors'>{phrase}{line}</p>
                </div>
            </div>
        </div>
    );
}
export default Sensors;