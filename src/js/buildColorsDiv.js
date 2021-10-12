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

export { buildColorsDiv as default };
