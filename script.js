window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("heroAfter").classList.add("show-content");
        document.getElementById("countdownBlock").classList.add("show-content");
    }, 4500);
});


const weddingDate = new Date("May 16, 2026 00:00:00").getTime();

function addZero(num) {
    return num < 10 ? "0" + num : num;
}

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML =
            "Этот день настал ❤️";
        return;
    }

    const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("weeks").textContent = addZero(weeks);
    document.getElementById("days").textContent = addZero(days);
    document.getElementById("hours").textContent = addZero(hours);
    document.getElementById("minutes").textContent = addZero(minutes);
    document.getElementById("seconds").textContent = addZero(seconds);

}, 1000);

const flowers = document.querySelectorAll('.decor');

let activeFalls = 0;
const MAX_FALLS = 3;

function startFall(flower) {
    activeFalls++;

    flower.classList.add('falling');

    flower.addEventListener('animationend', () => {
        flower.classList.remove('falling');
        activeFalls--;

        // Скрываем полностью перед возвращением
        flower.style.opacity = "0";

        const delay = 2000 + Math.random() * 4000;

        setTimeout(() => {
            flower.classList.add('respawn');

            flower.addEventListener('animationend', () => {
                flower.classList.remove('respawn');
                flower.style.opacity = "0.8";
            }, { once: true });

        }, delay);

    }, { once: true });
}

function randomCycle() {
    if (activeFalls >= MAX_FALLS) return;

    const available = Array.from(flowers)
        .filter(f => !f.classList.contains('falling'));

    if (available.length === 0) return;

    const flower = available[Math.floor(Math.random() * available.length)];
    startFall(flower);
}

setInterval(() => {
    randomCycle();
}, 3000);