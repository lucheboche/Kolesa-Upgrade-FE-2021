import '../scss/main.scss';

let innerHtmlText = '';
const divCards = document.querySelector('.cards');
const cardsMassive = [
    {
        idItem:    10,
        typeItem:  1,
        fotoUrl:   '/src/img/image 4.png',
        fotoAlt:   't-shirt',
        newItem:   true,
        priceItem: 220,
        titleItem: 'Футболка "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        idItem:    20,
        typeItem:  1,
        fotoUrl:   '/src/img/image 4.png',
        fotoAlt:   't-shirt',
        newItem:   false,
        priceItem: 110,
        titleItem: 'Футболка "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        idItem:    30,
        typeItem:  2,
        fotoUrl:   '/src/img/image 7.png',
        fotoAlt:   'shirt',
        newItem:   false,
        priceItem: 180,
        titleItem: 'Недохуди "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        idItem:    40,
        typeItem:  2,
        fotoUrl:   '/src/img/image 7.png',
        fotoAlt:   'shirt',
        newItem:   true,
        priceItem: 140,
        titleItem: 'Недохуди "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        idItem:    50,
        typeItem:  1,
        fotoUrl:   '/src/img/image 4.png',
        fotoAlt:   't-shirt',
        newItem:   false,
        priceItem: 220,
        titleItem: 'Футболка "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
];

const buildCardsInnerHTML = function (el) {
    innerHtmlText += `
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
${el.sizesItem}
</div>
<button class="btn card-item__btn">
Заказать
</button>
</div>
`;
};

const buildModal = function (param) {
    const el = cardsMassive.find(masEl => masEl.idItem === +param.target.dataset.card);
    const divModal = document.createElement('div');

    divModal.classList.add('modal');

    divModal.innerHTML = `<div class="modal__modal-box">
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
                <div class="modal-txt-side__price-box">
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
                <div class="modal-colors">
                    <div class="options__title">
                        Цвета:
                    </div>
                    <div class="options">
                        <label class="options__box">
                            <input class="input-radio" type="radio" name="color" checked>
                            <div class="options__tab options__tab--colors">
                                <div class="options__square options__square--blue-color"></div>
                                Синий
                            </div>
                        </label>
                        <label class="options__box">
                            <input class="input-radio" type="radio" name="color" >
                            <div class="options__tab options__tab--colors">
                                <div class="options__square options__square--beige-color"></div>
                                Бежевый
                            </div>
                        </label>
                        <label class="options__box">
                            <input class="input-radio" type="radio" name="color" >
                            <div class="options__tab options__tab--colors">
                                <div class="options__square options__square--grey-color"></div>
                                Серый
                            </div>
                        </label>
                    </div>
                </div>

                <div class="modal-sizes">
                    <div class="options__title">
                        Размер:
                    </div>
                    <div class="options">
                        <label class="options__box">
                            <input class="input-radio" type="radio" name="size" checked>
                            <div class="options__tab options__tab--sizes">
                                s
                            </div>
                        </label>
                        <label class="options__box">
                            <input class="input-radio" type="radio" name="size">
                            <div class="options__tab options__tab--sizes">
                                m
                            </div>
                        </label>
                        <label class="options__box">
                            <input class="input-radio" type="radio" name="size">
                            <div class="options__tab options__tab--sizes">
                                l
                            </div>
                        </label>
                    </div>
                </div>
                <div class="modal-txt-side__details">
                    <div class="modal-txt-side__subtitle--bold">
                        Детали:
                    </div>
                    <div class="modal-txt-side__txt">
                        Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%
                    </div>
                </div>
                <div class="modal-txt-side__howchoose">
                    <div class="modal-txt-side__subtitle--bold">
                        Как выбрать размер:
                    </div>
                    <div class="modal-txt-side__txt">
                        Написать дяде Рику для уточнения.
                    </div>
                </div>
            </div>
        </div>`;
    document.body.prepend(divModal);
    document.body.style.overflow = 'hidden';
    // document.querySelector('.js-close').addEventListener('click', () => {
    //     document.querySelector('.modal').remove();
    //     document.body.style.overflowY = 'visible';
    // }, { once: true });
};

const buildCardsTag = function (event) {
    // const cardsListeners = document.querySelectorAll('.js-card');

    // if (cardsListeners.length > 0) {
    //     cardsListeners
    //         .forEach(card => card.removeEventListener('click', eventCard => buildModal(eventCard)));
    // }

    let tip;

    if (typeof (event) === 'number') {
        tip = event;
    } else {
        tip = +event.target.dataset.idTab;
    }

    if (tip > 0) {
        cardsMassive.filter(el => el.typeItem === tip).forEach(el => buildCardsInnerHTML(el));
    } else {
        cardsMassive.forEach(el => buildCardsInnerHTML(el));
    }

    divCards.innerHTML = innerHtmlText;
    innerHtmlText = '';
    // document.querySelectorAll('.js-card')
    //     .forEach(card => card.addEventListener('click', eventCard => buildModal(eventCard)));
};

const removeModal = () => {
    document.querySelector('.modal').remove();
    document.body.style.overflowY = 'visible';
};

document.querySelectorAll('.js-tab')
    .forEach(tab => tab.addEventListener('change', event => buildCardsTag(event)));

const checkedTab = +document.querySelector('.js-tab:checked').dataset.idTab;

cardsMassive.sort((b, a) => {
    if (a.newItem > b.newItem) {
        return 1;
    }

    if (a.newItem < b.newItem) {
        return -1;
    }

    return 0;
});

document.addEventListener('click', (event) => {
    const list = event.target.classList;

    // console.log(event);

    if (list.contains('js-card')) {
        buildModal(event);
    }

    if (list.contains('js-close') || list.contains('modal')) {
        removeModal(event);
    }
});

buildCardsTag(checkedTab);
