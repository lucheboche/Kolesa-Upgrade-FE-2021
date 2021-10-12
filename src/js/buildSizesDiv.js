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

export { buildSizesDiv as default };
