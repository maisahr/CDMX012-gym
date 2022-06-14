import { useEffect, useState } from "react";
import { RenderCapsules } from "../RenderCapsules/RenderCapsules";

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
        <section>
            <h2>All capsules:</h2>
            {capsules?.map((capsule, index) => {
                return(
                    <RenderCapsules capsule={capsule} key={index}></RenderCapsules>
                )
            })}
        </section>
    )
}