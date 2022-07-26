 const anims = document.querySelectorAll('.anim');
 /*  */

 // класс для создания аккордиона
 class ItcAccordion {
     constructor(target, config) {
         this._el = typeof target === 'string' ? document.querySelector(target) : target;
         const defaultConfig = {
             alwaysOpen: true,
             duration: 350
         };
         this._config = Object.assign(defaultConfig, config);
         this.addEventListener();
     }
     addEventListener() {
         this._el.addEventListener('click', (e) => {
             const elHeader = e.target.closest('.accordion__header');
             if (!elHeader) {
                 return;
             }
             if (!this._config.alwaysOpen) {
                 const elOpenItem = this._el.querySelector('.accordion__item_show');
                 if (elOpenItem) {
                     elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
                 }
             }
             this.toggle(elHeader.parentElement);
         });
     }
     show(el) {
         const elBody = el.querySelector('.accordion__body');
         if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
             return;
         }
         elBody.style['display'] = 'block';
         const height = elBody.offsetHeight;
         elBody.style['height'] = 0;
         elBody.style['overflow'] = 'hidden';
         elBody.style['transition'] = `height ${this._config.duration}ms ease`;
         elBody.classList.add('collapsing');
         el.classList.add('accordion__item_slidedown');
         elBody.offsetHeight;
         elBody.style['height'] = `${height}px`;
         window.setTimeout(() => {
             elBody.classList.remove('collapsing');
             el.classList.remove('accordion__item_slidedown');
             elBody.classList.add('collapse');
             el.classList.add('accordion__item_show');
             elBody.style['display'] = '';
             elBody.style['height'] = '';
             elBody.style['transition'] = '';
             elBody.style['overflow'] = '';
         }, this._config.duration);
     }
     hide(el) {
         const elBody = el.querySelector('.accordion__body');
         if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
             return;
         }
         elBody.style['height'] = `${elBody.offsetHeight}px`;
         elBody.offsetHeight;
         elBody.style['display'] = 'block';
         elBody.style['height'] = 0;
         elBody.style['overflow'] = 'hidden';
         elBody.style['transition'] = `height ${this._config.duration}ms ease`;
         elBody.classList.remove('collapse');
         el.classList.remove('accordion__item_show');
         elBody.classList.add('collapsing');
         window.setTimeout(() => {
             elBody.classList.remove('collapsing');
             elBody.classList.add('collapse');
             elBody.style['display'] = '';
             elBody.style['height'] = '';
             elBody.style['transition'] = '';
             elBody.style['overflow'] = '';
         }, this._config.duration);
     }
     toggle(el) {
         el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
     }
 }




 /*  */
 document.addEventListener('DOMContentLoaded', function() {

     // Анимация. Блок hero
     function animblock() {
         if (window.innerWidth >= 768) {
             for (let index = 0; index < anims.length; index++) {
                 const anim = anims[index];

                 anim.classList.add('_active')
             }
         }
     }
     setTimeout(animblock, 500);





     // accordion
     /*   new ItcAccordion(document.querySelector('.accordion'), {
        alwaysOpen: false
    });*/

     new ItcAccordion(document.querySelector('.accordion'), {
         alwaysOpen: true
     });



     //слайдер Swiper
     const swiper = new Swiper('.swiper', {
         // Optional parameters
         /* slidesPerView: 3, */
         loop: true,

         // If we need pagination
         pagination: {
             el: '.swiper-pagination',
             // буллеты
             clickable: true,
             // динамические буллеты
             dynamicBullets: true,
             /*  dynamicMainBullets: 1, */
             dynamicMainBullets: 1
         },

         // Navigation arrows
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         },

         // отступы между слайдами
         spaceBetween: 50,
         /* centeredSlides: true,
         slidesPerView: 1, */
         autoHeight: true,
         // стартовый слайд
         initialSlide: 3,
         speed: 500,


         //
         /*  breakpoints: {
              320: {
                  spaceBetween: 15,

              },
              480: {
                  spaceBetween: 20,
              },
              768: {
                  //spaceBetween: 40,
              },
              992: {
                  spaceBetween: 30,
              },
              1120: {
                  spaceBetween: 120,

              },
              1300: {
                  spaceBetween: 150,

              }

          }, */
         // обновить слайдер
         // при изменении элементов слайдера
         observer: true,

         // обновить слайдер
         // при изменении родительских элементов слайдера
         observeParents: true,

         // обновить слайдер
         // при изменении дочерних элементов слайдера
         observeSlideChildren: true,

     });

 }, false);