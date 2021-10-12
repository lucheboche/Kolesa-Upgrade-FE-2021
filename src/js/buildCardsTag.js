import cardsMassive from './cardsMassive';
import buildModal from './buildModal';
import buildCardItemDiv from './buildCardItemDiv';

const divCards = document.querySelector('.cards');

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

export { buildCardsTag as default };
