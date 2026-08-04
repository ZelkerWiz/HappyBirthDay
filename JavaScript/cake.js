// ============================
// Lấy phần tử
// ============================

const wish = document.getElementById("wish");
const countdown = document.getElementById("countdown");
const birthday = document.getElementById("birthday");
const nextBtn = document.getElementById("nextBtn");

const flame1 = document.querySelector(".candle-1 .flame");
const flame9 = document.querySelector(".candle-9 .flame");

const smoke1 = document.querySelector(".candle-1 .smoke");
const smoke9 = document.querySelector(".candle-9 .smoke");

// ============================
// Khởi tạo
// ============================

birthday.style.display = "none";
nextBtn.style.display = "none";
countdown.style.display = "none";

// ============================
// Chạy animation
// ============================

window.onload = async function () {
  await sleep(1500);

  fadeIn(wish);

  await sleep(2500);

  fadeOut(wish);

  await sleep(800);

  countdown.style.display = "block";

  for (let i = 3; i >= 1; i--) {
    countdown.innerText = i;

    countdown.style.transform = "scale(1.3)";

    await sleep(350);

    countdown.style.transform = "scale(1)";

    await sleep(650);
  }

  countdown.style.display = "none";

  blowCandles();

  await sleep(1800);

  birthday.style.display = "block";

  fadeIn(birthday);

  await sleep(1200);

  nextBtn.style.display = "block";

  fadeIn(nextBtn);
};

// ============================
// Thổi nến
// ============================

function blowCandles() {
  flame1.style.opacity = "0";
  flame9.style.opacity = "0";

  smoke1.style.opacity = "1";
  smoke9.style.opacity = "1";

  smoke1.classList.add("smokeAnimation");
  smoke9.classList.add("smokeAnimation");
}

// ============================
// Fade
// ============================

function fadeIn(element) {
  element.style.opacity = "0";
  element.style.display = "block";

  let opacity = 0;

  let timer = setInterval(function () {
    opacity += 0.05;

    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(timer);
    }
  }, 30);
}

function fadeOut(element) {
  let opacity = 1;

  let timer = setInterval(function () {
    opacity -= 0.05;

    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(timer);

      element.style.display = "none";
    }
  }, 30);
}

// ============================
// Delay
// ============================

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================
// Button
// ============================

nextBtn.onclick = function () {
  window.location.href = "ending.html";
};
