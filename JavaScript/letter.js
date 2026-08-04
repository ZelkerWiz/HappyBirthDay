// ======================================
// LẤY PHẦN TỬ
// ======================================

const typingText = document.getElementById("typingText");
const hiddenText = document.getElementById("hiddenText");
const nextBtn = document.getElementById("nextBtn");
const bgMusic = document.getElementById("bgMusic");

// ======================================
// LẤY HTML GỐC
// ======================================

const html = hiddenText.innerHTML.trim();

typingText.innerHTML = "";

let index = 0;

// ======================================
// TYPEWRITER HỖ TRỢ HTML
// ======================================

function typeWriter() {
  if (index >= html.length) {
    showButton();
    return;
  }

  // Nếu gặp thẻ HTML
  if (html[index] === "<") {
    let end = html.indexOf(">", index);

    typingText.innerHTML += html.slice(index, end + 1);

    index = end + 1;
  } else {
    typingText.innerHTML += html[index];

    index++;
  }

  typingText.scrollTop = typingText.scrollHeight;

  const speed = 25 + Math.random() * 25;

  setTimeout(typeWriter, speed);
}

// ======================================
// HIỆN BUTTON
// ======================================

function showButton() {
  nextBtn.style.opacity = "1";
  nextBtn.style.pointerEvents = "auto";
}

// ======================================
// CHUYỂN TRANG
// ======================================

nextBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "cake.html";
  }, 1000);
});

// ======================================
// NHẠC
// ======================================

window.onload = () => {
  bgMusic.play().catch(() => {});

  setTimeout(typeWriter, 800);
};
