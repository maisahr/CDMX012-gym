import { useEffect, useState } from "react";
import { RenderCapsules } from "../RenderCapsules/RenderCapsules";
import './AllCapsules.css';

export const AllCapsules = () => {
    const [capsules, setCapsules] = useState();

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/capsules')
          .then((response) => {
            return response.json()
          })
          .then((capsules) => {
            setCapsules(capsules)
          })
    }, []);

    console.log(capsules)

    return(
        <section className='allCapsules'>
            <h2>All capsules:</h2>
            <div>
                {capsules?.map((capsule, index) => {
                    return(
                        <RenderCapsules capsule={capsule} key={index}></RenderCapsules>
                    )
                })}
            </div>
        </section>
    )
}