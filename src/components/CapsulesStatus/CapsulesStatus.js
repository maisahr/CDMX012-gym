import './CapsulesStatus.css'
import active from '../../assets/rocketActive.svg'
import destroyed from '../../assets/rocketDeactivate.svg'
import unknown from '../../assets/rocketUnknown.svg'

export const CapsulesStatus = () => {
    return(
        <section className='capsulesStatus'>
            <h2>Capsules status:</h2>
            <div>
                <figure id='active'>
                    <figcaption>Active</figcaption>
                    <img src={active} alt='active rocket'></img>
                </figure>

                <figure id='destroyed'>
                    <figcaption>Destroyed</figcaption>
                    <img src={destroyed} alt='destroyed rocket'></img>
                </figure>

                <figure id='unknown'>
                    <figcaption>Unknown</figcaption>
                    <img src={unknown} alt='unknown rocket'></img>
                </figure>
            </div>
        </section>
    );
}