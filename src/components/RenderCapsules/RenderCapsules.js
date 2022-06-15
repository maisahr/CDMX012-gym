import './RenderCapsules.css'
import active from '../../assets/rocketActive.svg'
import unknown from '../../assets/rocketUnknown.svg'
import destroyed from '../../assets/rocketDeactivate.svg'

export const RenderCapsules = ({capsule}) => {
    let icon = ''

    if(capsule.status === 'active'){
        icon = active
    } if(capsule.status === 'unknown'){
        icon = unknown
    } else {
        icon = destroyed
    }

    return(
        <figure className='capsule'>
            <h3>{capsule.capsule_serial}</h3>
            <img src={icon} alt={capsule.status}></img>
            <p>{capsule.details}</p>
        </figure>
    )
}