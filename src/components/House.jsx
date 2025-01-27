import React from 'react'

export function House({photo, type, beds, rating, title}) {
    return (
        <li>
            <img src={photo} alt={title} className="w-[375px] rounded-3xl" />
            <div className="grid grid-cols-2 mt-2">
                <span>{type}. {beds} beds</span>
                <span className="flex items-center">
                    <img src="./src/assets/star.svg" alt="star" className="w-[30px]" />{rating}
                </span>
            </div>
            <span className="font-semibold text-[1.3rem]">{title}</span>
        </li>
    )
}
