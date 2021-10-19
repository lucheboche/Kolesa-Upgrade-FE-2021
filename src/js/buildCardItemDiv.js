import buildSizesInCard from './buildSizesInCard';

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
            ${buildSizesInCard(el.sizes)}
        </div>
<button class="btn card-item__btn">
Заказать
</button>
</div>
`;
};

export { buildCardItemDiv as default };
