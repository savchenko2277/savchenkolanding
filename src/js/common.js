import "./polyfills.js";
import "./blocks.js";
import { showPopup } from "./libs/popups";
import { eventsPopup } from "./libs/popups";
import Inputmask from "inputmask";
// import "../../node_modules/swiped-events/dist/swiped-events.min.js";

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */


// --- Плавный скролл до блока --- //
// document.querySelectorAll('[data-scroll]').forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href').substring(1);
//       const offsetTop = 160;
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         const elementPosition = targetElement.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - offsetTop;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });

eventsPopup();

document.querySelectorAll('.liquid-hover').forEach(el => {
    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
    });
});

document.querySelectorAll("input[type='tel']").forEach(input => {
    Inputmask({
        mask: "+7 (999) 999-99-99",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
        jitMasking: true
    }).mask(input);
});

document.querySelectorAll('.btn-unavailable').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        showPopup(document.querySelector('.popup_unavailable'));
    });
});