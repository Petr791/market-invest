const anims = document.querySelectorAll('.anim');
console.log('gg');



document.addEventListener('DOMContentLoaded', function() {



    // Ваш скрипт
    function animblock() {
        for (let index = 0; index < anims.length; index++) {
            const anim = anims[index];

            anim.classList.add('_active')
        }
    }
    setTimeout(animblock, 500);
}, false);