import View from "./view";
import state from "../js/state";

class paginationView extends View {

    _parentElm = document.querySelector('.pagination');

    handler( handler) {
        this._parentElm.addEventListener('click', handler);
    }

    _html() {

        const beginFrom = state.search.page * import.meta.env.VITE_PER_PAGE_RECIPE;
        if (state.search.results
            .slice(beginFrom, beginFrom + 10).length === 0 ) {
            return '';
        }

        const total = state.search.totalPages;
        const curr  = state.search.page;

        if (curr === 0 && total > 0) {
            // console.log('page 1 + other');
            return `
               <button class="btn--inline pagination__btn--next" data-go="${curr + 1}">
                 <span>Page ${curr + 1}</span>
                 <svg class="search__icon">
                   <use href="src/img/icons.svg#icon-arrow-right"></use>
                 </svg>
               </button>
            `
        }

        if ( curr === 0 && total === 0 ){
            return '<p>Only page</p>';
        }

        if ( curr === total ) {
            return `
             <button class="btn--inline pagination__btn--prev" data-go="${total - 1}">
                <svg class="search__icon">
                  <use href="src/img/icons.svg#icon-arrow-left"></use>
                </svg>
                <span>Page ${total-1}</span>
              </button>
            `
        }

        if (curr > 0 && curr < total) {
            return `
             <button class="btn--inline pagination__btn--prev" data-go="${curr - 1}">
                 <svg class="search__icon">
                   <use href="src/img/icons.svg#icon-arrow-left"></use>
                 </svg>
                 <span>Page ${curr - 1}</span>
               </button>
               <button class="btn--inline pagination__btn--next" data-go="${curr + 1}">
                 <span>Page ${curr + 1}</span>
                 <svg class="search__icon">
                   <use href="src/img/icons.svg#icon-arrow-right"></use>
                 </svg>
               </button>
            `
        }

    }
}

export default new paginationView();