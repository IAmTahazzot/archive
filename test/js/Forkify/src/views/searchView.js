import View from "./view";
import state from "../js/state";
import recipeView from "./recipeView";

class Search extends View {
    _parentElm = document.querySelector('.results');
    _searchBtn = document.querySelector('.search__btn');
    _query = document.querySelector('.search__field');

    handler(handler) {
       this._searchBtn.addEventListener('click', handler);
    }

    getQuery() {
        return this._query.value;
    }

    _html() {
        const beginFrom = state.search.page * import.meta.env.VITE_PER_PAGE_RECIPE;
       if (state.search.results
           .slice(beginFrom, beginFrom + 10).length === 0 ) {

            recipeView.render(`
              <a href='/' style="margin: 2rem auto; font-weight: 400; display: block; background-color: #ecf9f8; padding: 1.5rem 0rem; border-radius: 4px; color:#016666; max-width: 500px; text-decoration: none; font-size: 1.6rem; text-align: center; font-family: 'Segoe UI', sans-serif; border: 1px solid #baf0f7;">
                 Nothing found! Please <strong>Click here to</strong> refresh the page.
              </a>
            `)
       }

        window.results = state;
        return state.search.results
            .slice(beginFrom, beginFrom + 10)
            .map( results => {
           return `
               <li class="preview">
                <a class="preview__link preview__link--active"
                   href="#${results.id}">
                  <figure class="preview__fig">
                    <img src="${results.img}" alt="${results.title}" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${results.title}</h4>
                    <p class="preview__publisher">${results.publisher}</p>
<!--                    <div class="preview__user-generated">-->
<!--                      <svg>-->
<!--                        <use href="src/img/icons.svg#icon-user"></use>-->
<!--                      </svg>-->
<!--                    </div>-->
                  </div>
                </a>
              </li>
           `
        }).join('');
    }
}

export default new Search;