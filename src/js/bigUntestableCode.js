import { getItemsRequest } from './requests';

import {
    showElement,
    offElement,
    insertHtmlToApp,
    runButtonElements,
} from './myFunctions';

const errorElement = document.querySelector('#error');
const loaderElement = document.querySelector('#loader');
const appElement = document.querySelector('#app');

export default () => {
    offElement(errorElement);
    showElement(loaderElement);

    getItemsRequest()
        .then(({ data }) => {
            insertHtmlToApp(data, appElement, errorElement);
            runButtonElements(appElement);
        })
        .catch((e) => {
            errorElement.innerHTML = e.message;
            showElement(errorElement);
        })
        .finally(() => {
            offElement(loaderElement);
        });
};
