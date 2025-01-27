import React from 'react'

export function House({photo, type, beds, rating, title}) {
    return (
        <li className='mt-5 '>
            <img src={photo} alt={title} className="w-[375px] rounded-3xl lg:w-[500px] xl:w-[400px]" />
            <div className="flex items-center gap-20 mt-2">
                <span>{type}. {beds} beds</span>
                <span className="flex items-center">
                    <img src="./src/assets/star.svg" alt="star" className="w-[30px]" />{rating}
                </span>
            </div>
            <span className="font-semibold text-[1.3rem]">{title}</span>
        </li>
    )
}
