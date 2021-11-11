import { toggleFavoriteRequest } from './requests';

export function showElement(e) {
    e.style.display = 'block';

    return e.style.display;
}

export function offElement(e) {
    e.style.display = 'none';

    return e.style.display;
}

export function buttonsListener(e) {
    e.preventDefault();

    e.currentTarget.textContent = 'Загрузка...';

    toggleFavoriteRequest(e.currentTarget.dataset.id)
        .then(({ data: buttonData }) => {
            if (buttonData.result === 'set') {
                e.currentTarget.textContent = '🌝';
            } else {
                e.currentTarget.textContent = '🌚';
            }
        });
}

export function runButtonElements(appElement) {
    const buttonElements = Array.from(appElement.querySelector('button'));

    buttonElements.forEach(button => button.addEventListener('click', buttonsListener));
}

export function insertHtmlToApp(data, appElement, errorElement) {
    if (data.result !== 'ok' || typeof data.html === 'undefined') {
        errorElement.innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
        showElement(errorElement);
    } else {
        appElement.innerHTML = data.html;
        showElement(appElement);
    }
}
