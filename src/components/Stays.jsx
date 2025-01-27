import { useState, useEffect } from "react";
import { House } from "./House";
import stays from "../stays.json";

export function Stays() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(stays)
    }, [])
    return (
        <ul className="mt-8">
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
