import React from 'react'

export const Footer: React.FC = () => {
    return (
        <div className=' py-3'>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022 <a href="/" target="_blank" className="hover:underline">TheMealDB</a>.  All Rights Reserved.
            </span>
        </div>
    )
}
