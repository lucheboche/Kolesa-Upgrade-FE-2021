import '../scss/main.scss';
import cardsMassive from './cardsMassive';

const divCards = document.querySelector('.cards');
const divTabs = document.querySelectorAll('.js-tab');
const checkedTab = +document.querySelector('.js-tab:checked').dataset.idTab;

const buildSizesInCard = function (el) {
    if (el.length > 0) {
        let html = '<span style="text-transform: uppercase;">';

        el.forEach((c, i) => {
            html += `${i < 1 ? '' : '/'}${c}`;
        });
        html += '</span>';

        return html;
    }

    return '&nbsp';
};

const buildCardItemDiv = function (el) {
    return `
<div class="card-item js-card" data-card="${el.idItem}">
    <div class="card-item__image">
        <img src="${el.fotoUrl}" alt="${el.fotoAlt}" width="330" height="330">
        ${el.newItem ? `<div class="card-item__stick">
            new
            </div>` : ''}
    </div>
    <div class="card-item__price">
        ${el.priceItem} баллов
    </div>
    <div class="card-item__title">
        ${el.titleItem}
    </div>

    <div class="card-item__sizes">
            Размеры: ${buildSizesInCard(el.sizes)}
        </div>
<button class="btn card-item__btn">
Заказать
</button>
</div>
`;
};

const buildColorsDiv = function (el) {
    if (el.length > 0) {
        let html = `<div class="modal-colors">
    <div class="options__title">
        Цвета:
    </div>
    <div class="options">`;

        el.forEach((c, i) => {
            html += `
        <label class="options__box">
            <input class="input-radio" type="radio" name="color"${i < 1 ? ' checked' : ''}>
            <div class="options__tab options__tab--colors">
                <div class="options__square options__square--${c.modName}-color"></div>
                ${c.txt}
            </div>
        </label>`;
        });

        html += `
    </div>
</div>`;

        return html;
    }

    return '';
};

const buildSizesDiv = function (el) {
    if (el.length > 0) {
        let html = `<div class="modal-sizes">
        <div class="options__title">
            Размер:
        </div>
        <div class="options">`;

        el.forEach((c, i) => {
            html += `
            <label class="options__box">
                <input class="input-radio" type="radio" name="size"${i < 1 ? ' checked' : ''}>
                <div class="options__tab options__tab--sizes">
                    ${c}
                </div>
            </label>`;
        });

        html += `
    </div>
</div>`;

        return html;
    }

    return '';
};

const buildDescriptionDiv = function (el) {
    if (el.length > 0) {
        let html = '';

        el.forEach((c) => {
            html += `
    <div class="description">
        <div class="description__title">
            ${c.title}
            </div>
            <div class="description__txt">
            ${c.txt}
        </div>
    </div>`;
        });

        return html;
    }

    return '';
};

const closeModal = (el) => {
    if (el.target.classList.contains('js-close') || el.target.classList.contains('modal')) {
        document.removeEventListener('click', event => closeModal(event));
        document.querySelector('.modal').remove();

        document.body.style.overflowY = 'visible';
    }
};

const buildModal = function (param) {
    const el = cardsMassive.find(masEl => masEl.idItem === +param.target.dataset.card);
    const divModal = document.createElement('div');

    divModal.classList.add('modal');

    divModal.innerHTML = `
        <div class="modal__modal-box">
            <button class="modal-box__close">
                <img class="js-close"
                src="/src/img/close-big.svg"
                alt="close"
                width="32"
                height="32"
                >
            </button>
            <div class="modal-box__foto-side modal-foto-side">
                <img
                src="${el.fotoUrl}"
                alt="${el.fotoAlt}"
                width="330"
                height="330"
                >
                <div class="modal-foto-side__preview">
                    <label class="modal-foto-side__lbl">
                        <input class="input-radio" type="radio" name="preview">
                        <div class="modal-foto-side__preview-image">
                            <img
                            src="/src/img/small1.png"
                            alt="Превью1"
                            width="50"
                            height="50"
                            >
                        </div>
                    </label>
                    <label class="modal-foto-side__lbl">
                        <input class="input-radio" type="radio" name="preview" checked>
                        <div class="modal-foto-side__preview-image">
                            <img
                            src="/src/img/small2.png"
                            alt="Превью2"
                            width="50"
                            height="50"
                            >
                        </div>
                    </label>
                    <label class="modal-foto-side__lbl">
                        <input class="input-radio" type="radio" name="preview">
                        <div class="modal-foto-side__preview-image">
                            <img
                            src="/src/img/small3.png"
                            alt="Превью3"
                            width="50"
                            height="50"
                            >
                        </div>
                    </label>
                </div>
            </div>

            <div class="modal-box__txt-side modal-txt-side">
                <div class="modal-txt-side__title">
                    ${el.titleItem}
                </div>
                <div class="modal-txt-side__price-box price-box">
                    <div class="price-box__pricebtn">
                        <div class="price-box__price">
                        ${el.priceItem} баллов
                        </div>
                        <button class="price-box__btn btn">
                            Попросить 50 баллов
                        </button>
                    </div>
                    <div class="price-box__balance-box">
                        <div class="price-box__tvoibalans-box">
                            <div class="price-box__balance-title">
                                Твой баланс:
                            </div>
                            <div class="price-box__balance">
                                50 баллов
                            </div>
                        </div>
                        <img src="/src/img/balans_icon.png" alt="Bags" class="image">
                    </div>
                </div>
                ${buildColorsDiv(el.colors)}
                ${buildSizesDiv(el.sizes)}
                ${buildDescriptionDiv(el.description)}
            </div>
        </div>`;

    document.body.style.overflow = 'hidden';

    document.body.prepend(divModal);

    document.addEventListener('click', event => closeModal(event));
};

const buildCardsTag = function (event) {
    const cardsListeners = document.querySelectorAll('.js-card');

    if (cardsListeners.length > 0) {
        cardsListeners
            .forEach(card => card.removeEventListener('click', eventCard => buildModal(eventCard)));
    }

    let tip;

    if (typeof (event) === 'number') {
        tip = event;
    } else {
        tip = +event.target.dataset.idTab;
    }

    divCards.innerHTML = '';

    if (tip > 0) {
        cardsMassive.filter(el => el.typeItem === tip)
            .forEach((el) => { divCards.innerHTML += buildCardItemDiv(el); });
    } else {
        cardsMassive.forEach((el) => { divCards.innerHTML += buildCardItemDiv(el); });
    }

    document.querySelectorAll('.js-card')
        .forEach(card => card.addEventListener('click', eventCard => buildModal(eventCard)));
};

divTabs.forEach(tab => tab.addEventListener('change', event => buildCardsTag(event)));

cardsMassive.sort((b, a) => {
    if (a.newItem > b.newItem) {
        return 1;
    }

    if (a.newItem < b.newItem) {
        return -1;
    }

    return 0;
});

buildCardsTag(checkedTab);
