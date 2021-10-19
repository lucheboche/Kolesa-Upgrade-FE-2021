const buildSizesInCard = function (el) {
    if (el.length > 0) {
        let html = 'Размеры: <span style="text-transform: uppercase;">';

        el.forEach((c, i) => {
            html += `${i < 1 ? '' : '/'}${c}`;
        });
        html += '</span>';

        return html;
    }

    return '&nbsp';
};

export { buildSizesInCard as default };
