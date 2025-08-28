import { showPopup } from "../../js/libs/popups";

(() => {

    const form = document.querySelector('.callback__form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showPopup(document.querySelector('.popup_unavailable'));
    });


})();
