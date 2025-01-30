import React from 'react'
import { useEffect, useState } from "react";
import stays from "../stays.json";


export function Search({ showSearch, setShowSearch }) {

    const [data, setData] = useState(stays)
    const [guests, setGuests] = useState(initialvalue)

    function onChange(e) {
        const value = e.target.value
        const name = e.target.name

        setGuests((prevState) => ({ ...prevState, [name]: value }))

    }
//comentario en branch testbusqueda
    useEffect(() => {
        console.log(guests)
    }, [guests])

    function handleSearch() {
        const rs = data.filter(city => city.city.toLowerCase().includes(guests.city.toLowerCase()))
    }

    return (
        <>
            {showSearch &&
                <div className="bg-white fixed h-3/4 w-96 grid grid-cols-2">
                    <h3>Edit your search</h3>
                    <button onClick={() => setShowSearch(false)}>X</button>
                    <ul className=''>
                        <li className=''>
                            <label htmlFor="">Location</label>
                            <input id="city" name="city" type="text" placeholder="Add location" className=''
                                value={guests.city}
                                onChange={onChange}
                            />
                        </li>
                        <li>
                            <label htmlFor="">Guests</label>
                            <input id="maxGuests" name="maxGuests" type="text" placeholder="Add Guests"
                                className=''
                                value={guests.maxGuests}
                                onChange={onChange}
                            />
                        </li>
                        <li>
                            <button className="text-white end-2.5 bottom-2.5 bg-[#EB5757] font-medium rounded-lg text-sm px-4 py-2 flex"
                                onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                 Search</button>
                        </li>
                    </ul>
                </div>
            }
        </>

    )
}

const initialvalue = {
    city: "",
    maxGuests: ""
}