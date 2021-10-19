const buildFotoSide = function (el) {
    let html = `<div class="modal-box__foto-side modal-foto-side">
        <img src="${el.fotoUrl}" alt="${el.fotoAlt}" width="330" height="330">
        <div class="modal-foto-side__preview">`;

    for (let i = 1; i <= 3; i += 1) {
        html += `
        <label class="modal-foto-side__lbl">
            <input class="input-radio" type="radio" name="preview"${i === 2 ? ' checked' : ''}>
            <div class="modal-foto-side__preview-image">
                <img src="/src/img/small${i}.png" alt="preview ${i}" width="50" height="50">
            </div>
        </label>`;
    }

    html += `
    </div>
</div>`;

    return html;
};

export { buildFotoSide as default };
