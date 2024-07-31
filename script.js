document.addEventListener('DOMContentLoaded', function() {
// Seleciona o botão
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Mostra o botão quando a rolagem for maior que 20px
window.onscroll = function() {
    if (document.body.scrollTop > 650|| document.documentElement.scrollTop > 650) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Quando o botão é clicado, rola para o topo da página
scrollTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
});





    // MUDAR FOTO DO HOME
    var fundohome = document.getElementById('home');
    const backgrounds = ['bg1', 'bg2'];
    let index = 0;

    setInterval(function() {
        fundohome.classList.remove(backgrounds[index % backgrounds.length]);
        index++;
        fundohome.classList.add(backgrounds[index % backgrounds.length]);
    }, 5000); 

    const whatsapp =document.getElementById('whatsappButton');
    setTimeout(() => {
        whatsapp.classList.remove('minimized');
        setTimeout(() => {
            whatsapp.classList.add('minimized');
        }, 5000);
    }, 2000);

// MODAL

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
    var previmage = currentImageIndex.parentElement.previousElementSibling;
    updateModalImage(previmage);
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


}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});




// DOT GALERIA
    let slideIndex1 = 0;
    const dots = document.querySelectorAll('.dot1');
    
    function showSlides1(n) { 
        if (n >= dots.length) {
            slideIndex1 = 0;
        } else if (n < 0) {
            slideIndex1 = dots.length - 1;
        } else {
            slideIndex1 = n;
        }
       
        const offset = -slideIndex1 * 260 - (slideIndex1 * (window.innerWidth * 0.015)); 
        document.querySelector('.galeria1').style.transform = `translateX(${offset}px)`;
    
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex1].classList.add('active');
    }
    
    window.changeSlide1 = function(n) {
        showSlides1(slideIndex1 + n);
    }
    
    window.currentSlide1 = function(n) {
        showSlides1(n);
    }
    
    showSlides1(slideIndex1);



    let slideIndex3 = 0;
    const dots3 = document.querySelectorAll('.dot3');
    
    function showSlides3(n) { 
        if (n >= dots3.length) {
            slideIndex3 = 0;
        } else if (n < 0) {
            slideIndex3 = dots3.length - 1;
        } else {
            slideIndex3 = n;
        }
       
        const offset = -slideIndex3 * 260 - (slideIndex3 * (window.innerWidth * 0.015)); 
        document.querySelector('.galeria3').style.transform = `translateX(${offset}px)`;
    
        dots3.forEach(dot => dot.classList.remove('active'));
        dots3[slideIndex3].classList.add('active');
    }
    
    window.changeSlide3 = function(n) {
        showSlides3(slideIndex3 + n);
    }
    
    window.currentSlide3 = function(n) {
        showSlides3(n);
    }
    
    showSlides3(slideIndex3);


    
    let slideIndex4 = 0;
    const dots4 = document.querySelectorAll('.dot4');

    function showSlides4(n) {
        if (n >= dots4.length) {
            slideIndex4 = 0;
        } else if (n < 0) {
            slideIndex4 = dots4.length - 1;
        } else {
            slideIndex4 = n;
        }

        const offset = -slideIndex4 * 280 - (slideIndex4 * (window.innerWidth * 0.015));
        document.querySelector('.testemunhos-wrap').style.transform = `translateX(${offset}px)`;

        dots4.forEach(dot => dot.classList.remove('active'));
        dots4[slideIndex4].classList.add('active');
    }

    window.changeSlide4 = function(n) {
        showSlides4(slideIndex4 + n);
    }

    window.currentSlide4 = function(n) {
        showSlides4(n);
    }

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
    dots.forEach((element) => {
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






    var Observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('desaparecer');
          } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('desaparecer');
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


});
