const mask = document.getElementById("particle-mask");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = Math.min(scrollTop / docHeight, 1);

    // move gradient up as you scroll
    mask.style.transform = `translateY(${100 - progress * 100}%)`;
});
