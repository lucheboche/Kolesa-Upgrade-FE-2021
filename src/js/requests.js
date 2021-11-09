import axios from 'axios';

axios.defaults.baseURL = 'http://example.com';

export const getItemsRequest = () => axios.get('/getItems');

export const toggleFavoriteRequest = id => axios.post('/toggleFavorite', new URLSearchParams({ id }));

export function showElement(e) {
    e.style.display = 'block';
}

export function offElement(e) {
    e.style.display = 'none';
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

export function runButtonElements(e) {
    const buttonElements = Array.from(e.querySelector('button'));

    buttonElements.forEach((button) => {
        button.addEventListener('click', el => buttonsListener(el));
    });
}
