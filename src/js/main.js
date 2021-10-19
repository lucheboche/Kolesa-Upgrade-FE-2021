import '../scss/main.scss';
import cardsMassive from './cardsMassive';
import buildCardsTag from './buildCardsTag';

const divTabs = document.querySelectorAll('.js-tab');
const checkedTab = +document.querySelector('.js-tab:checked').dataset.idTab;

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
