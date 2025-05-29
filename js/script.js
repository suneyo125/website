const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');
window.addEventListener('load', () => {
    loadingAreaGrey.animate(
        {
            opacity: [1,0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8
            },
            {
                opacity: 0,
                offset: 1
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );  
});

/* 
画像ギャラリー
================================================ */
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

    for(let i = 0; i < thumbImages.length; i++) {
        thumbImages[i].addEventListener('mouseover', (event) => {
            mainImage.src = event.target.src;
            mainImage.animate({opacity: [0, 1]}, 500);
        });
    }
thumbImages.forEach((thumbImage)=>{
    thumbImage.addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({opacity: [0, 1]}, 500);
    });
});    

/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li')
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw',  0]}, menuOptions);
  menuItems.forEach((menuItem, index) => {
    //console.log(menuItem);
    menuItem.animate(
        {
          opacity: [0, 1],
          translate: ['2rem', 0],
        },
        {
          duration: 2400,
          delay: 300 * index,
          easing: 'ease',
          fill: 'forwards',
        }
    );
  });
});

menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});

/* スクロールで要素を表示 
================================================ */
//監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', 0],
                },
                {
                    duration: 2000, 
                    easing: 'ease',
                    fill: 'forwards'
                }
            );
            obs.unobserve(entry.target);
        }
    });
};

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);