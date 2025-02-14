let cactusState = 4;
const cactus = document.getElementById('cactus');

cactus.addEventListener('click', () => {
    cactus.style.animation = 'clickEffect 0.3s ease';

    setTimeout(() => {
        if (cactusState > 1) {
            cactusState--;
            cactus.src = `imgs/cactus-${cactusState}.png`;

            const epineId = `epine${5 - cactusState}`;
            const epine = document.getElementById(epineId);
            epine.style.display = 'block';
            epine.style.animation = 'fall 1s forwards';

            setTimeout(() => {
                epine.style.display = 'none';
            }, 1000);
        } else {
            cactus.src = `imgs/cactus-0.png`;
            cactus.classList.add('cactus-final');
            document.getElementById('message').classList.add('visible');
        }
    }, 300);

    setTimeout(() => {
        cactus.style.animation = '';
    }, 300);
});
