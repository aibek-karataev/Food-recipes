import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFilterCategory } from '../api/api';
import { Loader } from '../components/Loader/Loader';
import { MealList } from '../components/MealList'

type ICategory = {
  category: string,
}

export const ProductPage: React.FC = () => {

  const [products, setProducts] = useState([]);
  const { category }: ICategory = useParams();

  useEffect(() => {

    getFilterCategory(category)
      .then(data => setProducts(data.meals));

  }, [category])

  return (
    <>
      {
        products.length > 0 ?
          <MealList products={products} /> :
          <div className="flex items-center justify-center my-6"><Loader /></div>
      }
    </>
  )
}
