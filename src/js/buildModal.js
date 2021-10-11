import cardsMassive from './cardsMassive';
import buildColorsDiv from './buildColorsDiv';
import buildSizesDiv from './buildSizesDiv';
import buildDescriptionDiv from './buildDescriptionDiv';
import closeModal from './closeModal';

const buildModal = function (param) {
    const el = cardsMassive.find(masEl => masEl.idItem === +param.target.dataset.card);
    const divModal = document.createElement('div');

    divModal.classList.add('modal');

    divModal.innerHTML = `
        <div class="modal__modal-box">
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
                <div class="modal-txt-side__price-box price-box">
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
                ${buildColorsDiv(el.colors)}
                ${buildSizesDiv(el.sizes)}
                ${buildDescriptionDiv(el.description)}
            </div>
        </div>`;

    document.body.style.overflow = 'hidden';

    document.body.prepend(divModal);

    document.addEventListener('click', event => closeModal(event));
};

export { buildModal as default };
