const confettiCanvas = document.getElementById('confettiCanvas');
const confettiCtx = confettiCanvas.getContext('2d');
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
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 5 - 2.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y += this.speed;
        this.angle += this.spin;
        if (this.y > confettiCanvas.height) {
            this.y = 0 - this.size;
        }
    }

    draw() {
        confettiCtx.save();
        confettiCtx.translate(this.x, this.y);
        confettiCtx.rotate(this.angle * Math.PI / 180);
        confettiCtx.beginPath();
        confettiCtx.arc(0, 0, this.size, 0, Math.PI * 2);
        confettiCtx.fillStyle = this.color;
        confettiCtx.fill();
        confettiCtx.closePath();
        confettiCtx.restore();
    }
}

function startConfetti() {
    confettiArray = [];
    for (let i = 0; i < 200; i++) {
        confettiArray.push(new Confetti());
    }
    animateConfetti();
}

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiArray.forEach((confetti) => {
        confetti.update();
        confetti.draw();
    });
    requestAnimationFrame(animateConfetti);
}
