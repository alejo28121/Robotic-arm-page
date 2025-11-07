import '../assets/styles/avance.css'
import { useState, useEffect, useRef } from 'react';

function Avance(){
    const [phrase, setPhrase] = useState("");
        const [line, setLine] = useState(" |");
        let i = useRef(0);
        let phraseI = "Actualmente, el proyecto presenta un 60 % de avance estructural, con los servos y ejes montados. La comunicación entre el programa en C y el simulador RoboDK funciona correctamente, permitiendo enviar y recibir ángulos de cada servo en tiempo real. El siguiente paso consiste en integrar completamente los módulos IMU (acelerómetro + giroscopio) para registrar velocidad angular, aceleración lineal y posición estimada, optimizando el control y la estabilidad del brazo durante el movimiento.";
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
        <div className="Basic-info-container">
            <div className='Text-content'>
                <h1 className='Title-description'>Estado actual del proyecto</h1>
                <div className='Progress-bar-cotainer'>
                    <div className='Progress-bar'>
                        <div className='Progress-bar-p'>
                            <span className='Percentage'>60%</span>
                        </div>
                    </div>
                </div>
                <div className='Container'>
                    <p className='Text-info'>{phrase}{line}</p>
                </div>
            </div>
        </div>
    );
}
export default Avance;