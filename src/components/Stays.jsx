import { useState, useEffect } from "react";
import { House } from "./House";
import stays from "../stays.json";

export function Stays() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(stays)
    }, [])
    return (
        <ul className="mt-8 flex flex-col md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {data.map(({photo, type, beds, rating, title}) => (
                <House
                photo={photo}
                type={type}
                beds={beds}
                rating={rating}
                title={title}
                />
            ))}
            
        </ul>
    )
}
