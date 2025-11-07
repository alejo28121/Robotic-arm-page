import '../assets/styles/message.css'
import Corner from '../assets/icons/corner.svg'
import { useState, useEffect, useRef } from 'react';

function Message(){
    const [phrase, setPhrase] = useState("");
    const [line, setLine] = useState(" |");
    let i = useRef(0);
    let phraseI = "Construyendo el Futuro.";
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
                        setTimeout(() => {
                            i.current = 0;
                            setPhrase("");
                            setLine(" |");
                            startTyping(); 
                        }, 3000);
                    }
            }, 100);
        }
        startTyping(); 
        return () => clearInterval(interval); 
    }, []);
    return(
        <div className="Main-message-container">
            <div className='message-container'>
                <div className='left-corners'>
                    <img src={Corner} className='Corner-1'></img>
                    <img src={Corner} className='Corner-2'></img>
                </div>
                <p>{phrase}{line}</p>
                <div className='right-corners'>
                    <img src={Corner} className='Corner-3'></img>
                    <img src={Corner} className='Corner-4'></img>
                </div>
            </div>
        </div>
    );
}
export default Message;