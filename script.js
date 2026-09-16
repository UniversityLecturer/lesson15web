/* 背景(はいけい)画像(がぞう)をゆっくり動(うご)かします / Move the background image slowly */
const hero = document.querySelector(".section1");
const heroBg = document.querySelector(".hero-bg");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let ticking = false;

function updateParallax() {
    if (!hero || !heroBg || reduceMotion.matches) {
        ticking = false;
        return;
    }

    const rect = hero.getBoundingClientRect();

    if (rect.bottom > 0 && rect.top < window.innerHeight) {
        /* 0.25を変(か)えると速(はや)さが変(か)わります / Change 0.25 to change the speed */
        const movement = -rect.top * 0.25;
        heroBg.style.transform = `translateY(${movement}px)`;
    }

    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
window.addEventListener("resize", requestParallaxUpdate);
requestParallaxUpdate();

/* スマホのナビを開(ひら)く・閉(と)じる / Open and close the mobile menu */
const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".header-nav a");

function closeNavigation() {
    if (!navToggle || !headerNav) return;

    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "メニューを開く");
    headerNav.classList.remove("is-open");
}

if (navToggle && headerNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";

        navToggle.setAttribute("aria-expanded", String(!isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "メニューを開く" : "メニューを閉じる");
        headerNav.classList.toggle("is-open", !isOpen);
    });

    /* リンクを押(お)したらメニューを閉(と)じます / Close after choosing a link */
    navLinks.forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeNavigation();
    });

    window.matchMedia("(min-width: 769px)").addEventListener("change", closeNavigation);
}
