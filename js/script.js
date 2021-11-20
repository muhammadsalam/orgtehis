function clearSearchInput() {
    document.querySelector('.header-inner__form input').value = '';
}

$('.slider-inner').slick({
    infinite: false,
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots slider-inner__dots'
});