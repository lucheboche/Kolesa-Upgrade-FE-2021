import axios from 'axios';
import {
    runButtonElements,
    offElement,
    showElement,
    insertHtmlToApp,
} from '../myFunctions';

jest.mock('axios');

const mockedResponse = { result: 'ok' };

const errorResponse = new Error('Error!');

const data = {
    result: 'ok',
    html:   `
        <button id="btn" data-id="1">Кнопка 1</button>
        <button id="btn" data-id="2">Кнопка 2</button>
        <button id="btn" data-id="3">Кнопка 3</button>`,
};

const errorElement = document.createElement('div');
const appElement = document.createElement('div');
const loaderElement = document.createElement('div');

errorElement.setAttribute('id', 'error');
appElement.setAttribute('id', 'app');
loaderElement.setAttribute('id', 'loader');

document.body.append(errorElement);
document.body.append(appElement);
document.body.append(loaderElement);

describe('Группа тестов домашнего задания.', () => {
    beforeAll(() => {
        offElement(errorElement);
        showElement(loaderElement);
        axios.get
            .mockImplementationOnce(
                () => Promise.resolve(mockedResponse),
            )
            .mockImplementationOnce(
                () => Promise.reject(errorResponse),
            );
    });

    afterAll(() => {
        document.body.querySelector('#error').remove();
        document.body.querySelector('#app').remove();
        document.body.querySelector('#loader').remove();

        offElement(loaderElement);
        axios.get.mockRestore();
    });

    test('Тест на добавление контента на страницу в блок #app.', () => {
        insertHtmlToApp(data, appElement, errorElement);

        expect(appElement).toMatchSnapshot();
    });

    test('Тест на отображение и скрытие лоадера.', () => {
        showElement(loaderElement);
        expect(loaderElement.style.display).toBe('block');
        offElement(loaderElement);
        expect(loaderElement.style.display).toBe('none');
    });

    test('Тест на добавление событий.', () => {
        const buttonsListener = jest.fn();

        insertHtmlToApp(data, appElement, errorElement);
        runButtonElements(appElement);

        const buttonElements = document.querySelectorAll('button');

        expect(buttonElements).not.toBeNull();
        expect(buttonElements.length).toBe(3);

        buttonElements.forEach(button => button.addEventListener('click', buttonsListener));

        buttonElements.forEach((button) => { button.click(); });

        expect(buttonsListener).toBeCalled();
        expect(buttonsListener).toHaveBeenCalledTimes(3);
    });
});
