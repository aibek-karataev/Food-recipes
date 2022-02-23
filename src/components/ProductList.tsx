import React from 'react'
import { ProductItem } from './ProductItem'

type mealPro = {
  products: string[]
}

export const ProductList: React.FC<mealPro> = ({ products }) => {
  return (
    <div className='grid gap-4 grid-cols-2 my-2 xl:grid-cols-4 md:grid-cols-3'>
      {
        products.map((item, id) => <ProductItem key={id} {...item} />)
      }
    </div>
  )
}
