const btn = document.getElementById("fingerprint-btn");
let timer;
const sound = new Audio("magic.mp3");

btn.addEventListener("mousedown", () => {
  btn.classList.add("glow");
  sound.play();
  timer = setTimeout(() => {
    const logoGhost = document.getElementById("logo-ghost");

function showGhostLogoThenRedirect(target) {
  logoGhost.style.opacity = "1";
  logoGhost.style.transform = "translate(-50%, -50%) scale(1.2)";

  setTimeout(() => {
    logoGhost.style.opacity = "0";
    window.location.href = target;
  }, 800);
}

// تغییر قبلی رو جایگزین کن:
btn.addEventListener("mousedown", () => {
  btn.classList.add("glow");
  sound.play();
  showGhostLogoThenRedirect("album.html");
});
window.location.href = "album.html";
  }, 1000);
});

btn.addEventListener("mouseup", () => {
  clearTimeout(timer);
  btn.classList.remove("glow");
  sound.pause();
  sound.currentTime = 0;
});
const images = document.querySelectorAll(".album-slide img");
const fullScreenDiv = document.querySelector(".fullscreen");
const fullScreenImg = document.getElementById("fullscreen-img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    fullScreenImg.src = img.src;
    fullScreenDiv.style.display = "flex";
  });
});

fullScreenDiv.addEventListener("click", () => {
  fullScreenDiv.style.display = "none";
});
