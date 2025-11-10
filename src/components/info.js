import '../assets/styles/info.css'
import { useState, useEffect, useRef } from 'react';

function BasicInfo(){
    const [phrase, setPhrase] = useState("");
        const [line, setLine] = useState(" |");
        let i = useRef(0);
        let phraseI = "El proyecto consiste en el desarrollo de un brazo robótico de seis grados de libertad (6DOF), controlado mediante un ESP32 y comunicado con el software de simulación RoboDK a través de un programa en C. Cada articulación utiliza servomotores de 15 kg·cm de torque (τ), permitiendo un movimiento estable y preciso. Durante el diseño se identificaron problemas de alineación en los ejes, por lo que se implementó un sistema de poleas y correas con relación 2:2, garantizando una transmisión uniforme del par sin pérdida de potencia.";
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
        <div className="Basic-info-container">
            <div className='Text-content'>
                <h1 className='Title-description'>Descripción del proyecto</h1>
                <div className='Container'>
                    <p className='Text-info'>{phrase}{line}</p>
                </div>
            </div>
        </div>
    );
}
export default BasicInfo;