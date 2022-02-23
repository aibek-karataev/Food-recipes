import { API_URL } from "./config";


const getAllMeals = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return response.json();
}

const getMealById = async (mealID: number | string) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealID);
    return await response.json();
}

const searchMealByName = async (mealName: string) => {
    const response = await fetch(API_URL + 'search.php?s=' + mealName);
    return await response.json();
}

const getFilterCategory = async (category: string) => {
    const response = await fetch(API_URL + 'filter.php?c=' + category);
    return await response.json();
}

export { getAllMeals, getMealById, searchMealByName, getFilterCategory }