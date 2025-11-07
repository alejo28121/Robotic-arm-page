import '../assets/styles/perfil.css'
import Photo from '../assets/images/photo.svg'

function Perfil(){
    return(
        <div className='Main-perfil-container'>
            <div className='Perfil-container'>
                <div className='Card'>
                    <div className='Card-inner'>
                        <div className='Front'>
                            <div className='circle'>
                                <div className='Red-dot'></div>
                                <div className='Yellow-dot'></div>
                                <div className='Green-dot'></div>
                            </div>
                            <div className='Front-content'>
                                <div className='Photo-container'>
                                    <div className='Photo-frame'>
                                        <img src={Photo} className='Photo-img'></img>
                                    </div>
                                </div>
                                <div className='Name-container'>
                                    <p className='Name'>Alejandro Grajales Vargas</p>
                                </div>
                            </div>
                        </div>
                        <div className='Back'>
                            <div className='Info-container'>
                                <h3 className='Carrer'>Programa: Ingenieria de Sistemas y Computacion</h3>
                                <h3 className='Uni'>Universidad Tecnologica de Pereira</h3>
                                <p className='Text'>Desarrollador Full Stack con sólidos conocimientos en React.js, Node.js, C y MySQL. Enfocado en crear soluciones web funcionales, escalables y con un diseño moderno e intuitivo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Perfil;