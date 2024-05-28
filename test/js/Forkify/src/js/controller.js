import * as modal from "./model";
import state from "./state";
import recipeView from "../views/recipeView";
import searchView from "../views/searchView";
import paginationView from "../views/paginationView";

const loadRecipeById = async () => {
    try {
        const ID = window.location.hash.slice(1);

        if (!ID) {
            return false;
        }

        recipeView.spinner(); // showing spinner while fetching data...

        // 1. fetching data from API
        await modal.getRecipeById(ID);

        // 2. render single recipe
        recipeView.render(state.recipe);
    } catch (err) {
        // 3. catch the error
        recipeView.error('Unable to show to recipe! Try something else.')
    }
};

const search = async e => {
    e.preventDefault();
    searchView.spinner();
    const query = searchView.getQuery();

    // 1. do search
    await modal.search(query);

    // 2. render data
    searchView.render();
    paginationView.render();
};

const pagination = e => {
    const btn = e.target.closest('.btn--inline');

    // guard if button is not found
    if (!btn) {
        return false;
    }

    // 1. get the page number
    const goTo = Number(btn.dataset.go);
    // console.log(goTo);

    // 2. update the state
    state.search.page = goTo;

    // 3. re-render the UI
    searchView.render();
    paginationView.render();
}

// ============================================================= INIT THE APP
const init = () => {
    recipeView.handler(loadRecipeById);
    searchView.handler(search);
    paginationView.handler(pagination)
};

init();