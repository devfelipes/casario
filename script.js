document.addEventListener('DOMContentLoaded', function() {
const telaphone = !window.matchMedia("(max-width: 640px)").matches;


let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

let slideIndex1 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;



    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Mudança de fundo do home
    const fundohome = document.getElementById('home');
    const backgrounds = ['bg1', 'bg2'];
    let index = 0;

    setInterval(function() {
        fundohome.classList.remove(backgrounds[index % backgrounds.length]);
        index++;
        fundohome.classList.add(backgrounds[index % backgrounds.length]);
    }, 5000);


    // Botão WhatsApp
    const whatsapp = document.getElementById('whatsappButton');
    setTimeout(() => {
        whatsapp.classList.remove('minimized');
        setTimeout(() => {
            whatsapp.classList.add('minimized');
        }, 5000);
    }, 2000);

    // Modal
    var currentImageIndex = 0;
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var zoomed = false;

    window.openModal = function(index) {
        currentImageIndex = index;
        modal.style.display = "block";
        modalImg.src = index.src;
        captionText.innerHTML = index.alt;
        document.body.classList.add('modal-open');
    };

    var updateModalImage = function(nextImg) {
        if (nextImg) {
            currentImageIndex = nextImg.querySelector('img');
            modalImg.src = currentImageIndex.src;
            captionText.innerHTML = currentImageIndex.alt;
        }
    };

    document.getElementById("nextimage").addEventListener('click', function() {
        var nextImg = currentImageIndex.parentElement.nextElementSibling;
        updateModalImage(nextImg);
    });

    document.getElementById("previmage").addEventListener('click', function() {
        var prevImg = currentImageIndex.parentElement.previousElementSibling;
        updateModalImage(prevImg);
    });

    window.closeModal = function() {
        modal.style.display = "none";
        modalImg.style.transform = "scale(1)";
        zoomed = false;
        document.body.classList.remove('modal-open');
    };

    window.nex = function(direction) {
        currentImageIndex += direction;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
        modalImg.src = images[currentImageIndex].src;
        captionText.innerHTML = images[currentImageIndex].alt;
        modalImg.style.transform = "scale(1)";
        zoomed = false;
    };

    window.toggleZoom = function() {
        if (zoomed) {
            modalImg.style.transform = "scale(1)";
            zoomed = false;
        } else {
            modalImg.style.transform = "scale(2)";
            zoomed = true;
        }
    };

    window.toggleFullscreen = function() {
        if (!document.fullscreenElement) {
            modal.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    modalImg.addEventListener('click', toggleZoom);

    document.addEventListener('click', function(event) {
        var modal = document.querySelector('.modal');
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Galeria de Slides
    var dots1, dots3;

    function showSlides1(n) {

        if (telaphone){
            dots1 = document.querySelectorAll('.dot1');
        } else{
             dots1 = document.querySelectorAll('.dot3phone');
        }
        if(telaphone){
        if (n >= dots1.length) {
            slideIndex1 = 0;
        } else if (n < 0) {
            slideIndex1 = dots1.length - 1;
        } else {
            slideIndex1 = n;
        }
    }
    

        const offset = -slideIndex1 * 260 - (slideIndex1 * (window.innerWidth * 0.015));
        if (telaphone){
        document.querySelector('.galeria1').style.transform = `translateX(${offset}px)`;
        
        }   else{
            showphonegalery1(slideIndex1);

    }
        dots1.forEach(dot => dot.classList.remove('active'));
        dots1[slideIndex1].classList.add('active');
    }

    window.changeSlide1 = function(n) {
        showSlides1(slideIndex1 += n);
    };

    window.currentSlide1 = function(n) {
        showSlides1(n);
    };

    showSlides1(slideIndex1);

    
    if (telaphone){
        dots3 = document.querySelectorAll('.dot3');
    } else{
         dots3 = document.querySelectorAll('.dot3phone');
    }
    function showSlides3(n) {
        if(telaphone){
        if (n >= dots3.length) {
            slideIndex3 = 0;
        } else if (n < 0) {
            slideIndex3 = dots3.length - 1;
        } else {
            slideIndex3 = n;
        }
    }

        const offset = -slideIndex3 * 260 - (slideIndex3 * (window.innerWidth * 0.015));
        if (telaphone){
            document.querySelector('.galeria3').style.transform = `translateX(${offset}px)`;
            
            } 
            else{
                    showphonegalery2(slideIndex3);
    
            }

        
        dots3.forEach(dot => dot.classList.remove('active'));
        dots3[slideIndex3].classList.add('active');
    }

    window.changeSlide3 = function(n) {
        showSlides3(slideIndex3 += n);
    
    }

    window.currentSlide3 = function(n) {
        showSlides3(n);
    };

    showSlides3(slideIndex3);

    const dots4 = document.querySelectorAll('.dot4');

    function showSlides4(n) {
        if(telaphone){
        if (n >= dots4.length) {
            slideIndex4 = 0;
        } else if (n < 0) {
            slideIndex4 = dots4.length - 1;
        } else {
            slideIndex4 = n;
        }
    }
        const offset = -slideIndex4 * 280 - (slideIndex4 * (window.innerWidth * 0.015));
         if (telaphone){
            document.querySelector('.testemunhos-wrap').style.transform = `translateX(${offset}px)`;
            dots4.forEach(dot => dot.classList.remove('active'));
            dots4[slideIndex4].classList.add('active');
            } 
            else{
                    showphonegalery3(slideIndex4);
    
            }
         
    }

    window.changeSlide4 = function(n) {
        showSlides4(slideIndex4 += n);
    };

    window.currentSlide4 = function(n) {
        showSlides4(n);
    };

    showSlides4(slideIndex4);

    let slideInterval1 = null;
    let slideInterval2 = null;
    let slideInterval4 = null;
    function startSlideShow1() {
        if (slideInterval1 === null) {
            slideInterval1 = setInterval(() => {
                changeSlide1(1);
                changeSlide3(1);
                  console.log('Iniciando o slideshow');
            }, 5000);
        }
    }

    function stopSlideShow1() {
        if (slideInterval1 !== null) {
            clearInterval(slideInterval1);
            clearInterval(slideInterval2);
            slideInterval1 = null;
            slideInterval2 = null;
            slideIndex3 = 0;
            slideIndex1 = 0;
            console.log('Parando o slideshow');
        }
    }

    var observerSlide1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startSlideShow1();
            } else {
                stopSlideShow1();
            }
        });
    });

    dots1.forEach((element) => {
        observerSlide1.observe(element);
    });

    function startSlideShow4() {
        if (slideInterval4 === null) {
            slideInterval4 = setInterval(() => {
                changeSlide4(1);
                console.log('Iniciando o slideshow');
            }, 5000);
        }
    }

    function stopSlideShow4() {
        if (slideInterval4 !== null) {
            clearInterval(slideInterval4);
            slideInterval4 = null;
            slideIndex4 = 0;
            console.log('Parando o slideshow');
        }
    }

    var observerSlide4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startSlideShow4();
            } else {
                stopSlideShow4();
            }
        });
    });

    dots4.forEach((element) => {
        observerSlide4.observe(element);
    });

    // Observer para animações
    var Observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hidden');
            }
        });
    });

    var hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
        Observer.observe(element);
    });

    var Observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
                entry.target.classList.remove('desaparecer');
            } else {
                entry.target.classList.remove('aparecer');
                entry.target.classList.add('desaparecer');
            }
        });
    });

    var hiddenElements2 = document.querySelectorAll('.aparecer');
    hiddenElements2.forEach((element) => {
        Observer2.observe(element);
    });

    setInterval(() => {
   
        

    }, 500);



function showphonegalery1() {
    const slides = document.getElementsByClassName("gallery1");
    const dots = document.getElementsByClassName("dot1phone");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex1 > slides.length) { slideIndex1 = 1; }
    if (slideIndex1 < 1) { slideIndex1 = slides.length; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
}

    function showphonegalery2() {
        const slides = document.getElementsByClassName("gallery3");
        const dots = document.getElementsByClassName("dot3phone");
    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        if (slideIndex3 > slides.length) { slideIndex3 = 1; }
        if (slideIndex3 < 1) { slideIndex3 = slides.length; }
    
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    
        slides[slideIndex3 - 1].style.display = "block";
        dots[slideIndex3 - 1].className += " active";
    }
    
    function showphonegalery3() {
        const slides3 = document.getElementsByClassName("testemunho");
        const dots = document.getElementsByClassName("dot4phone");
    
        for (let i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
    
        if (slideIndex4 > slides3.length) { slideIndex4 = 1; }
        if (slideIndex4 < 1) { slideIndex4 = slides3.length; }
    
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    
        slides3[slideIndex4 - 1].style.display = "block";
        dots[slideIndex4 - 1].className += " active";
    }

        if(!telaphone) {
        showphonegalery1();
        showphonegalery2();
        showphonegalery3();
        }
       
});
