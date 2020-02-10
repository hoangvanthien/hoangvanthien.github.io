// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });
window.sr = ScrollReveal({ container: ".post-listing" });

// Custom Settings

sr.reveal('.gh-title', {
    origin: 'bottom',
    duration: 3000,
});

sr.reveal('.gh-intro', {
    origin: 'bottom',
    duration: 3000,
});

sr.reveal('.gh-ending', {
    origin: 'bottom',
    duration: 3000,
});

sr.reveal('.gh-name', {
    origin: 'left',
    duration: 3000,
    viewFactor: 0.7,
});

sr.reveal('.gh-contrib', {
    origin: 'right',
    duration: 3000,
    delay: 1000,
    viewFactor: 0.7,
});

