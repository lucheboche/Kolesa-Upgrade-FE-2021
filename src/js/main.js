const divCards = document.querySelector('.cards');
const cardsMassive = [
    {
        fotoUrl:   '/src/img/image 4.png',
        fotoAlt:   't-shirt',
        newItem:   true,
        priceItem: 220,
        titleItem: 'Футболка "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        fotoUrl:   '/src/img/image 4.png',
        fotoAlt:   't-shirt',
        newItem:   false,
        priceItem: 110,
        titleItem: 'Футболка "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        fotoUrl:   '/src/img/image 7.png',
        fotoAlt:   'shirt',
        newItem:   false,
        priceItem: 180,
        titleItem: 'Недохуди "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        fotoUrl:   '/src/img/image 7.png',
        fotoAlt:   'shirt',
        newItem:   true,
        priceItem: 140,
        titleItem: 'Недохуди "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
    {
        fotoUrl:   '/src/img/image 4.png',
        fotoAlt:   't-shirt',
        newItem:   false,
        priceItem: 220,
        titleItem: 'Футболка "Эволюционируй или Эволюционируй или"',
        sizesItem: 'Размеры S/M/L',
    },
];

let innerHtmlText = '';

cardsMassive.forEach((el) => {
    innerHtmlText += `
<div class="item">
<div class="image">
    <img src="${el.fotoUrl}" alt="${el.fotoAlt}" width="330" height="330">
    ${el.newItem ? `<div class="stick">
        new
    </div>` : ''}
</div>
<div class="price-item">
    ${el.priceItem} баллов
</div>
<div class="title-item">
${el.titleItem}
</div>
<div class="sizes-item">
${el.sizesItem}
</div>
<button class="btn">
    Заказать
</button>
</div>
`;
});

divCards.innerHTML = innerHtmlText;
