(() => {

    const header = document.querySelector('.header');
    const headerBar = header.querySelector('.header__bar');
    const headerMenu = header.querySelector('.header__menu');
    const headerMenuElements = header.querySelectorAll('.header__menu-element');
    const headerBurger = header.querySelector('.header__burger');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('header_scroll');
        } else {
            header.classList.remove('header_scroll');
        }
    });

    const setHeader = () => {
        if (window.matchMedia('(max-width: 960px)').matches && !headerMenu.classList.contains('header__menu_active')) {
            headerMenuElements.forEach(element => {
                headerMenu.append(element);
            });
            headerMenu.classList.add('header__menu_active');
            console.log('pop');
        } else if(!window.matchMedia('(max-width: 960px)').matches && headerMenu.classList.contains('header__menu_active')) {
            headerMenuElements.forEach(element => {
                headerBar.append(element);
            });
            headerMenu.classList.remove('header__menu_active');
            console.log('pup');
        }
    };

    if (headerMenu) {
        setHeader();
    }

    window.addEventListener('resize', () => {
        setHeader();
    });

    headerBurger.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
        headerBurger.classList.toggle('active');
    });

})();
