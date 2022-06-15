import './RenderCapsules.css'
import active from '../../assets/rocketActive.svg'
import unknown from '../../assets/rocketUnknown.svg'
import destroyed from '../../assets/rocketDeactivate.svg'

export const RenderCapsules = ({capsule}) => {
    let icon = ''

    switch(capsule.status){
        default:
            icon = destroyed;
            break;
        case 'active':
            icon = active;
            break;
        case 'unknown':
            icon = unknown;
    }

    return(
        <figure className='capsule'>
            <h3>{capsule.capsule_serial}</h3>
            <img src={icon} alt={capsule.status}></img>
            <p>{capsule.details}</p>
        </figure>
    )
}