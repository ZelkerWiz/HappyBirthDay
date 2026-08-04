// ======================================
// LẤY PHẦN TỬ
// ======================================

const voice = document.getElementById("voice");
const message = document.querySelector(".subtitle");
const endText = document.querySelector(".end-text");
const container = document.querySelector(".container");

// ======================================
// HIỆU ỨNG FADE IN
// ======================================

window.addEventListener("load", () => {
  container.style.opacity = "0";
  container.style.transform = "translateY(20px)";

  setTimeout(() => {
    container.style.transition = "1.5s ease";
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }, 300);
});

// ======================================
// TỰ PHÁT AUDIO
// ======================================

window.addEventListener("load", () => {
  voice.play().catch(() => {
    console.log("Trình duyệt yêu cầu người dùng bấm Play.");
  });
});

// ======================================
// KHI AUDIO KẾT THÚC
// ======================================

voice.addEventListener("ended", () => {
  endText.style.opacity = "1";
  endText.style.transform = "translateY(0)";
});

// ======================================
// FADE OUT SAU 8 GIÂY
// ======================================

voice.addEventListener("ended", () => {
  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 8000);
});
