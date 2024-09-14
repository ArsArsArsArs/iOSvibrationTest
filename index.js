const tg = window.Telegram.WebApp;
tg.expand();

let hapticP = document.getElementById("haptic");
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("light");
    hapticP.textContent = "light"
}, 500)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("medium");
    hapticP.textContent = "medium"
}, 1000)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("heavy");
    hapticP.textContent = "heavy"
}, 1500)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("rigid");
    hapticP.textContent = "rigid"
}, 2000)
setTimeout(() => {
    tg.HapticFeedback.impactOccurred("soft");
    hapticP.textContent = "soft"
}, 2500)


