import '../assets/styles/NavBar.css'

function NavBar({scrollState}){
    return(
        <div className={`Main-nav-container${ scrollState ? '-scrolled' : ''}`}>
            <span className='Title-nav'>ROBOTIC ARM</span>
            <div className='Buttons-content'>
                {/*
                <div className='Menu-button'>
                    <span className='Span-menu'>Menu</span>
                    <div className='Fill-menu'></div>
                </div>
                */}
            </div>
        </div>
        
    );
}
export default NavBar;