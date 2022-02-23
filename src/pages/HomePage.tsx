import React, { useEffect, useState } from "react";
import { getAllMeals } from "../api/api";
import { Loader } from "../components/Loader/Loader";
import { ProductList } from "../components/ProductList";
import { Welcome } from "../components/Welcome";

export const HomePage: React.FC = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllMeals()
            .then(data => setProducts(data.categories))
    }, [])


    return (
        <div className="my-2">

            {
                products.length > 0
                    ? (
                        <>
                            <Welcome />
                            <h1 className="text-xl md:text-3xl font-bold my-2">Categories</h1>
                            <ProductList products={products} />
                        </>
                    ) : <div className="flex items-center justify-center my-6"><Loader /></div>
            }

        </div>
    );
};
