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

    useEffect(() => {
        console.log(guests)
    }, [guests])

    function handleSearch() {
        const rs = data.filter(city => city.toLowerCase().includes(guests.city.toLowerCase()))
    }

    return (
        <>
            {showSearch &&
                <div className="bg-white fixed h-3/4 w-96">
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
                            <button className="text-white end-2.5 bottom-2.5 bg-[#EB5757] font-medium rounded-lg text-sm px-4 py-2 justify-end"
                                onClick={handleSearch}><img src="./src/assets/search_icon.svg" alt="search icon" /> Search</button>
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