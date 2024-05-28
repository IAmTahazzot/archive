export default class View {
    errorMessage = 'Something went wrong!';

    render( data = [] ) {
        this._data = data;
        const markup = this._html();
        this.clear();
        this._parentElm.insertAdjacentHTML('afterbegin', markup);
    }

    clear() {
        this._parentElm.innerHTML = '';
    }

    spinner() {
        const html = `
            <div class="spinner">
              <svg>
                <use href="src/img/icons.svg#icon-loader"></use>
              </svg>
            </div> 
        `;

        this.clear();
        this._parentElm.insertAdjacentHTML('afterbegin', html);
    }

    error(message = this.errorMessage ) {
        this.clear();
        this._parentElm.insertAdjacentHTML('afterbegin', `
            <div class="error">
                <div>
                  <svg>
                    <use href="src/img/icons.svg#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
            </div>
        `);
    }
}