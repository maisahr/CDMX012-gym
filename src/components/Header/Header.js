import './Header.css'
import './HeaderAnimations.css'
import rocket from '../../assets/rocket.svg'

export const Header = () => {
    return(
        <header>
            <img src={rocket} alt='rocket' className='icon'></img>
            <div className='headerTexts'>
                <h1>ROCKET</h1>
                <p>IMPROVING ALL THE TIME</p>
                <a className='button' href='javascript: void(0)'><button>START</button></a>
            </div>
        </header>
    );
}