import {request} from "../helpers/req";
import state from './state';

export const getRecipeById = async (ID) => {

    try {
        const data = await request( import.meta.env.VITE_RECIPE_API + ID);
        const recipe = data.data.recipe;

        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            img: recipe.image_url,
            publisher: recipe.publisher,
            ingredients: recipe.ingredients,
            servings: recipe.servings,
            url: recipe.source_url,
            time: recipe.cooking_time,
        }
    } catch (err) {
        throw new Error('Recipe Not found')
    }

    return state.recipe;
}

export const search = async query => {
    try {
        const data = await request( import.meta.env.VITE_RECIPE_API + '?search=' + query + '&key=' + import.meta.env.VITE_API_KEY);

        // store search results to the STATE
        state.search.results = data.data.recipes.map((recipe, index) => {
            return {
                id: recipe.id,
                vID: index,
                title: recipe.title,
                img: recipe.image_url,
                publisher: recipe.publisher,
            }
        });

        state.search.totalPages = Math.ceil(state.search.results.length / import.meta.env.VITE_PER_PAGE_RECIPE) - 1;
    } catch (err) {
        throw new Error('Recipe Not found ' + err)
    }

    return state.search;
}