// ================================
// Lấy phần tử
// ================================

const title = document.querySelector("h1");
const subtitle = document.querySelector("p");
const button = document.querySelector("button");

// ================================
// Ẩn ban đầu
// ================================

title.style.opacity = "0";
subtitle.style.opacity = "0";
button.style.opacity = "0";

button.style.pointerEvents = "none";

// ================================
// Khi trang load
// ================================

window.onload = async function () {
  fadeIn(title);

  await sleep(1200);

  fadeIn(subtitle);

  await sleep(1800);

  fadeIn(button);

  button.style.pointerEvents = "auto";
};

// ================================
// Button
// ================================

button.onclick = async function () {
  document.body.style.transition = "1.2s";

  document.body.style.opacity = "0";

  await sleep(1200);

  window.location.href = "letter.html";
};

// ================================
// Fade In
// ================================

function fadeIn(element) {
  let opacity = 0;

  element.style.display = "block";

  let timer = setInterval(function () {
    opacity += 0.03;

    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(timer);
    }
  }, 20);
}

// ================================
// Delay
// ================================

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
