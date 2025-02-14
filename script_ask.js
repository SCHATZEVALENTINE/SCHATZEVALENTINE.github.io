let noButtonClicks = 0; // Compteur de clics sur le bouton "Non"

document.getElementById('yes-btn').addEventListener('click', function() {
    const popup = document.querySelector('.popup');
    const charmingImage = document.getElementById('charming-image');
    const happyGif = document.getElementById('happy-gif');
    const sadImage = document.getElementById('sad-image');

    // Ajouter une classe pour déclencher l'animation de disparition
    popup.classList.add('fade-out');

    // Après la fin de l'animation, masquer la pop-up et afficher les images
    setTimeout(() => {
        popup.style.display = 'none'; // Masquer la pop-up
        charmingImage.style.display = 'block'; // Afficher charming.png
        happyGif.style.display = 'block'; // Afficher happy-steam.gif
        sadImage.style.display='none'; // sad image dispa
        document.getElementById('yes-cliqued').style.display='block';
    }, 500); // Correspond à la durée de l'animation (0.5s)
});

document.getElementById('no-btn').addEventListener('click', function() {
    noButtonClicks++; // Incrémenter le compteur de clics

    const sadImage = document.getElementById('sad-image');

    if (noButtonClicks === 1) {
        document.getElementById('question').innerText = "Haha, tu as dû te tromper de bouton, tkt, tu as une deuxième chance ^^";
        sadImage.style.display = 'block'; // Afficher l'image sad.png
        sadImage.style.opacity = '0.5'; // Rendre l'image semi-transparente
        sadImage.style.transform = 'scale(0.8)'; // Réduire la taille de l'image
    } else if (noButtonClicks === 2) {
        document.getElementById('question').innerText = "Comment ça non, c'est juste un padel!? (Tu veux pas sortir avec moi ?????)";
        sadImage.style.opacity = '1'; // Rendre l'image complètement opaque
        sadImage.style.transform = 'scale(1)'; // Rétablir la taille d'origine
    } else if (noButtonClicks === 3) {
        document.getElementById('question').innerText = "Bon, c'est pas grave... À la limite, voudrais-tu bien être ma Valentine ?";
    } else if (noButtonClicks === 4) {
        document.getElementById('question').innerText = "Bon, c'est pas grave... À la limite, voudrais-tu bien être ma Valentine ? (BON VASI, T'AS PAS LE CHOIX, ARRÊTE D'APPUYER SUR NON, ON EST FAITS L'UN POUR L'AUTRE)";
        document.getElementById('no-btn').style.display = 'none'; // Masquer le bouton "Non" après 4 clics
    }
});