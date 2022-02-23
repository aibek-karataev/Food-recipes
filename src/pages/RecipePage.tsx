import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMealById } from '../api/api'
import { Loader } from '../components/Loader/Loader'

interface IParam {
    id: string
}

interface IRecipe {
    strMeal: string,
    strMealThumb: string,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strYoutube: string,
    strSource: string,
}

export const RecipePage: React.FC = () => {

    const [recipe, setRecipe] = useState<IRecipe>()
    const { id } = useParams<IParam>();

    useEffect(() => {
        getMealById(id)
            .then(data => setRecipe(data.meals[0]))
    }, [id])

    return (
        <>
            {
                recipe
                    ? (<div className='py-4'>
                        <div className='md:grid md:grid-cols-g2'>
                            <div className="relative"><img src={recipe?.strMealThumb} alt="" className='w-11/12 h-auto' /></div>
                            <div>
                                <h1 className='text-bold text-xl md:text-4xl text-black'>{recipe?.strMeal}</h1>
                                <p className='py-1'><span className='font-semibold font-base'>Category: </span>{recipe?.strCategory}</p>
                                <p className='py-1'><span className='font-semibold font-base'>Area: </span>{recipe?.strArea}</p>
                                <p className="py-1">{recipe?.strInstructions.slice(0, 700)}...</p>
                                <a href={recipe?.strSource} className='font-bold tex-2xl text-blue-600 underline'>Read mode </a>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className='w-10/12 md:w-5/12 py-2'>
                                <h2 className='font-bold text-2xl py-1'>Video Recipe</h2>
                                <div className="fluidMedia" >
                                    <iframe title={recipe?.strMeal} src={`https://www.youtube.com/embed/${recipe?.strYoutube.slice(-11)}`}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>)
                    : <div className="flex items-center justify-center my-6"><Loader /></div>
            }
        </>
    )
}
