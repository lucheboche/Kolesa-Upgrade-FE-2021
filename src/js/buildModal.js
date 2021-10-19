import cardsMassive from './cardsMassive';
import buildFotoSide from './buildFotoSide';
import buildColorsDiv from './buildColorsDiv';
import buildSizesDiv from './buildSizesDiv';
import buildDescriptionDiv from './buildDescriptionDiv';
import closeModal from './closeModal';

const buildModal = function (param) {
    const el = cardsMassive.find(masEl => masEl.idItem === +param.target.dataset.card);
    const divModal = document.createElement('div');

    divModal.classList.add('modal');

    divModal.innerHTML = `
        <div class="modal__box">
            <button class="modal__close">
                <img class="js-close" src="/src/img/close-big.svg" alt="close" width="32" height="32">
            </button>

            ${buildFotoSide(el)}

            <div class="modal-txt-side">
                <div class="modal-txt-side__title">
                    ${el.titleItem}
                </div>
                <div class="modal-txt-side__price-box price-box">
                    <div class="price-box__pricebtn">
                        <div class="price-box__price">
                        ${el.priceItem} баллов
                        </div>
                        <button class="btn price-box__btn">
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
                        <img src="/src/img/balans_icon.png" alt="Bags">
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
