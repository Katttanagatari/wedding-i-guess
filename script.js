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


const flowersContainer = document.querySelector(".flowers-layer");

for (let i = 0; i < 20; i++) {

    const flower = document.createElement("img");
    flower.src = "image/mini-flowers.png";
    flower.classList.add("flower");

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 8 + Math.random() * 6 + "s";
    flower.style.animationDelay = Math.random() * 5 + "s";
    flower.style.width = 25 + Math.random() * 35 + "px";
    flower.style.opacity = 0.4 + Math.random() * 0.6;

    flowersContainer.appendChild(flower);
}