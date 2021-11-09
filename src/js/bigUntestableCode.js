import {
    getItemsRequest,
    showElement,
    offElement,
    runButtonElements,
} from './requests';

const errorElement = document.querySelector('#error');
const appElement = document.querySelector('#app');
const loaderElement = document.querySelector('#loader');

export default () => {
    offElement(errorElement);
    showElement(loaderElement);

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                errorElement.innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
                showElement(errorElement);
            } else {
                appElement.innerHTML = data.html;
                showElement(appElement);
                runButtonElements(appElement);
            }
        })
        .catch((e) => {
            errorElement.innerHTML = e.message;
            showElement(errorElement);
        })
        .finally(() => {
            offElement(loaderElement);
        });
};
