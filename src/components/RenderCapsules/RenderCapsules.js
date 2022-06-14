import './RenderCapsules.css'

export const RenderCapsules = ({capsule}) => {
    return(
        <figure>
            <h3>{capsule.capsule_serial}</h3>
            <p>{capsule.details}</p>
        </figure>
    )
}