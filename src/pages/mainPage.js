import BackgroundVideo from '../assets/videos/backgroundR.mp4';
import '../assets/styles/MainPage.css'
import NavBar from '../components/navbar';
import Message from '../components/message';
import Perfil from '../components/perfil';
import BasicInfo from '../components/info';
import Sensors from '../components/sensors';
import Simulation from '../components/simulation';
import Avance from '../components/avance';
import { useState, useEffect } from 'react';

function MainPage(){
    const [scrollState, setScrollState] = useState(false);
    useEffect(() =>{
        const handleScroll = () => {
            setScrollState(window.scrollY > 100);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <div className="Main-container">
            <div className='Video-container'>
                <video autoPlay loop muted playsInline className='Background-Video' id='Bg-video'>
                    <source src={BackgroundVideo} type='video/mp4'/>
                </video>
                <div className='Blur-container'></div>
            </div>
            <div className="Content-container">
                <NavBar scrollState={scrollState}/>
                <Message />
                <div className='Basic-container'>
                    <Perfil />
                    <BasicInfo />
                </div>
                <div className='Basic-container'>
                    <Sensors/>
                    <Simulation/>
                </div>
                <div className='Basic-container2'>
                    <Avance/>
                </div>
            </div>
        </div>
    );
}
export default MainPage;