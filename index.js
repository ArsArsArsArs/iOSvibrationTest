const tg = window.Telegram.WebApp;
tg.expand();

let hapticP = document.getElementById("haptic");
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("light");
    hapticP.textContent = "light"
}, 1000)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("medium");
    hapticP.textContent = "medium"
}, 2000)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("heavy");
    hapticP.textContent = "heavy"
}, 3000)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("rigid");
    hapticP.textContent = "rigid"
}, 4000)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("soft");
    hapticP.textContent = "soft"
}, 5000)


