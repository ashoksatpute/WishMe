const confettiCanvas = document.getElementById('confettiCanvas');
const ctx = confettiCanvas.getContext('2d');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiArray = [];
const colors = ['#ff6363', '#feb47b', '#ff7e5f', '#ffd700', '#d3ffce'];

class Confetti {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = Math.random() * confettiCanvas.height - confettiCanvas.height;
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 3 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * 360;
    }

    update() {
        this.y += this.speed;
        this.angle += this.speed;
        if (this.y > confettiCanvas.height) {
            this.y = 0 - this.size;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

function startConfetti() {
    confettiArray = [];
    for (let i = 0; i < 100; i++) {
        confettiArray.push(new Confetti());
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiArray.forEach((confetti) => {
        confetti.update();
        confetti.draw();
    });
    requestAnimationFrame(animateConfetti);
}
