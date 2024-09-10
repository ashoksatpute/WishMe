const card = document.getElementById('card');
const balloonsContainer = document.getElementById('balloonsContainer');
const popSound = document.getElementById('popSound');

// Flip card on click
card.addEventListener('click', () => {
    card.classList.toggle('open');

    // Once card is opened, trigger balloons and confetti
    if (card.classList.contains('open')) {
        createBalloons();
        createConfetti();
        changeBackground();
    }
});

// Create balloons
function createBalloons() {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = getRandomColor();

        balloonsContainer.appendChild(balloon);
        animateBalloon(balloon);
    }
}

// Animate balloon floating up and popping
function animateBalloon(balloon) {
    setTimeout(() => {
        balloon.style.transform = `translateY(-120vh)`;

        // Pop balloon randomly
        const popTime = Math.random() * 4000 + 2000;
        setTimeout(() => {
            popBalloon(balloon);
        }, popTime);
    }, 100);
}

// Pop the balloon
function popBalloon(balloon) {
    balloon.classList.add('popped');
    popSound.currentTime = 0;
    popSound.play();
}

// Create confetti
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        balloonsContainer.appendChild(confetti);
    }
}

// Change background when card opens
function changeBackground() {
    document.body.style.background = 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)';
}

// Get random color for balloons and confetti
function getRandomColor() {
    const colors = ['#ff6363', '#feb47b', '#ffd700', '#84fab0', '#8fd3f4', '#ffb6b9'];
    return colors[Math.floor(Math.random() * colors.length)];
}
