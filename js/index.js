 const anims = document.querySelectorAll('.anim');




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




     // Событие отправки формы
     let formAsk = document.querySelector('#formask');
     //console.log(formAsk);
     formAsk.addEventListener('submit', (event) => {
         event.preventDefault();
         console.log("форма 'ask-form' отправлена!");
     });


     let formOrder = document.querySelector('#form-order');
     formOrder.addEventListener('submit', (event) => {
         event.preventDefault();
         console.log("форма 'order-form' отправлена!");
     });


     let formSelected = document.querySelector('#form-selected');
     formSelected.addEventListener('submit', (event) => {
         event.preventDefault();
         console.log("форма 'selected-form' отправлена!");
     });




 }, false);





 /*  */
 window.onload = function() {

     //слайдер Swiper
     const swiper = new Swiper('.swiper', {

         loop: true,
         // отступы между слайдами
         //spaceBetween: 150,
         /* centeredSlides: true,*/
         //slidesPerView: 1,
         autoHeight: true,
         // стартовый слайд
         initialSlide: 3,
         speed: 500,

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




         //
         breakpoints: {
             320: {
                 spaceBetween: -55,
             },
             400: {
                 spaceBetween: -70,
             },
             480: {
                 spaceBetween: -90,
             },
             568: {
                 spaceBetween: -100,
             },
             768: {
                 spaceBetween: -150,
             },
             992: {
                 spaceBetween: -150,
             },
             1120: {
                 spaceBetween: -70,
             },
             1300: {
                 spaceBetween: -50,
             }
         },

         // обновить слайдер
         // при изменении элементов слайдера
         //observer: true,

         // обновить слайдер
         // при изменении родительских элементов слайдера
         //observeParents: true,

         // обновить слайдер
         // при изменении дочерних элементов слайдера
         //observeSlideChildren: true,

         /*  runCallbacksOnInit: true,
         updateOnImagesReady: true,
         updateOnWindowResize: true,
         watchSlidesProgress: true,
 */
     });

     /*  swiper.updateAutoHeight(2000);
	swiper.updateProgress();
	swiper.updateSize();
	swiper.updateSlides();
	swiper.updateSlidesClasses();
	swiper.pagination.update(); */

     swiper.navigation.update();
     swiper.updateSize();


     // accordion
     /*   new ItcAccordion(document.querySelector('.accordion'), {
        alwaysOpen: false
    });*/



     /*var accordion1 = accordion();
     accordion1.init('#accordion');*/

     /*  document.querySelectorAll('.accordion').forEach((item, index) => {
          item.id = 'accordion-' + (index + 1);
          accordion().init('#' + item.id);
      }); */

     /* document.querySelectorAll('.accordion').forEach((item, index) => {
         item.id = 'accordion' + (index + 1);
         //accordion().init('#' + item.id);
         new ItcAccordion(('#' + item.id), {
             alwaysOpen: true
         });

     }); */

     new ItcAccordion(document.querySelector('#accordion-1'), {
         alwaysOpen: true
     });
     new ItcAccordion(document.querySelector('#accordion-2'), {
         alwaysOpen: true
     });

 }

 // header and contacts. Замена телефона на текст при клике
 let tels = document.querySelectorAll('.tel');
 //console.log(tels);
 tels.forEach(function(item, i, tels) {

     let elem = item;
     elem.addEventListener("click", function() {

         if (window.innerWidth >= 768) {
             event.preventDefault();

             function changeTelText() {
                 let timeSec = 4;
                 let fun = setInterval(timerСhangeTel, 1000);

                 function stop() {
                     clearInterval(fun);
                 }

                 function timerСhangeTel() {
                     elem.textContent = 'Скопировано!';
                     timeSec -= 1;
                     if (timeSec < 0) {
                         //+7 (987) 654-32-10
                         elem.textContent = '+7 (987) 654-32-10';
                         stop();
                     }
                 }
             }

             changeTelText();

         }
     });
 });