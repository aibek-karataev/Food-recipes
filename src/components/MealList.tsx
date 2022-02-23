import React from 'react'
import { MealItem } from './MealItem'

interface IMeal {
    products: string[]
}

export const MealList: React.FC<IMeal> = ({ products }) => {
    return (
        <div className='grid gap-4 grid-cols-2 my-2 xl:grid-cols-4 md:grid-cols-3'>
            {
                products.map((item, id) => <MealItem key={id} {...item} />)
            }
        </div>
    )
}
