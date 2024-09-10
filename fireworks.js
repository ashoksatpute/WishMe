const fireworksCanvas = document.getElementById('fireworksCanvas');
const fireworksCtx = fireworksCanvas.getContext('2d');
fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

class Firework {
    constructor() {
        this.x = Math.random() * fireworksCanvas.width;
        this.y = Math.random() * fireworksCanvas.height / 2;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 3 + 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.sparks = [];
    }

    explode() {
        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            this.sparks.push({
                x: this.x,
                y: this.y,
                angle: angle,
                speed: speed,
                size: this.size
            });
        }
    }

    update() {
        this.sparks.forEach(spark => {
            spark.x += Math.cos(spark.angle) * spark.speed;
            spark.y += Math.sin(spark.angle) * spark.speed;
            spark.size *= 0.95;
        });
    }

    draw() {
        this.sparks.forEach(spark => {
            fireworksCtx.beginPath();
            fireworksCtx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
            fireworksCtx.fillStyle = this.color;
            fireworksCtx.fill();
            fireworksCtx.closePath();
        });
    }
}

let fireworks = [];

function startFireworks() {
    setInterval(() => {
        const firework = new Firework();
        firework.explode();
        fireworks.push(firework);
    }, 1000);

    animateFireworks();
}

function animateFireworks() {
    fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    fireworks.forEach(firework => {
        firework.update();
        firework.draw();
    });
    requestAnimationFrame(animateFireworks);
}
