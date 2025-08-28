export const showPopup = (selector) => {
    
    document.querySelectorAll('.popup').forEach((item) => {
        item.classList.remove('active');
    });

    selector.classList.add('active');

    setTimeout(() => {
        selector.classList.remove('active');
    }, 3000);
};

export const eventsPopup = () => {
    document.querySelectorAll('.popup').forEach((item) => {
        item.addEventListener('click', (e) => {
           item.classList.remove('active');
        });
    });
}

export const closePopups = () => {
    document.querySelectorAll('.popup').forEach((item) => {
        item.classList.remove('active');
    });
}