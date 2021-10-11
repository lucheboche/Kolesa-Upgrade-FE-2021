const closeModal = (el) => {
    if (el.target.classList.contains('js-close') || el.target.classList.contains('modal')) {
        document.removeEventListener('click', event => closeModal(event));
        document.querySelector('.modal').remove();

        document.body.style.overflowY = 'visible';
    }
};

export { closeModal as default };
