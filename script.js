const button = document.getElementById('birthdayButton');
const message = document.getElementById('message');
const birthdaySong = document.getElementById('birthdaySong');

button.addEventListener('click', () => {
    button.classList.add('hidden');
    message.classList.remove('hidden');
    document.body.style.background = "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)";
    message.classList.add('animate');

    // Play sound
    birthdaySong.play();

    // Start confetti and fireworks
    startConfetti();
    startFireworks();
});
