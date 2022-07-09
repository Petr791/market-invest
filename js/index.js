const anims = document.querySelectorAll('.anim');

document.addEventListener('DOMContentLoaded', function() {


    function animblock() {
        if (window.innerWidth >= 768) {
            for (let index = 0; index < anims.length; index++) {
                const anim = anims[index];

                anim.classList.add('_active')
            }
        }
    }
    setTimeout(animblock, 500);
}, false);