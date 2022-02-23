import React from 'react';
import bg from "../assets/bg.jpg"

export const Welcome: React.FC = () => {
    return (
        <div className='flex items-center bg-cover bg-center h-36 md:h-72' style={{backgroundImage:`url(${bg})`}}>
            <div className="reletive md:py-4 max-w-full text-white m-auto text-center">
                <h1 className='text-bold text-2xl md:text-4xl py-2 inline'>Welcome to TheMealDB</h1>
                <p className='hidden md:block py-2 text-center md:px-48'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                    We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
            </div>
        </div>
    )
}
