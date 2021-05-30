new Splide('.splide',{
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    fixedWidth: '200px',
    fixedHeight: '270px',
    gap: '15px',
    padding: {
        left: '5px',
        
    }
}).mount();

new Splide('#newMoviesSplide',{
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    fixedWidth: '350px',
    fixedHeight: '230px',
    gap: '15px',
    padding: {
        left: '5px',
        
    }
}).mount();

new Splide('#cartoonSplide',{
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    fixedWidth: '200px',
    fixedHeight: '270px',
    gap: '10px',
    padding: {
        left: '5px',
        
    }
}).mount();
new Splide('#seriesSplide',{
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    arrows: 'false',
    pagination: 'false',
    fixedWidth: '350px',
    fixedHeight: '230px',
    gap: '15px',
    padding: {
        left: '5px',
        
    }
}).mount();


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        topMoviePrevIcon,
        topMovieNextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});