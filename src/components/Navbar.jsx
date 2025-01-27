import React, { useState } from "react";
import { Search } from "./Search";

export function Navbar() {

    const [showSearch, setShowSearch] = useState(false)

    return (
        <nav className="flex flex-col w-96 md:w-full lg:flex-row lg:w-96">
            <Search
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            ></Search>
            <img src="./src/assets/logo.svg" alt="windbnb logo" className="w-24" />
            <div className="grid grid-cols-3 w-5/6 h-16 mt-8 rounded-xl place-items-center border-2 border-solid divide-x-2 self-center">
                <span className="">Add location</span>
                <span>Add guests</span>
                <span onClick={()=> setShowSearch(!showSearch)}>
                    <img src="./src/assets/search_icon.svg" alt="search icon" />
                </span>
            </div>
        </nav>
    )
}