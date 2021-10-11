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

export { buildDescriptionDiv as default };
