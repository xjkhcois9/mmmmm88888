// Script لأكاديمية المستقبل

// إشعار عند إرسال نموذج "تواصل معنا"
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("form");
  if (contactForm && contactForm.querySelector("button[type='submit']")) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.");
      contactForm.reset();
    });
  }

  // إشعار عند اختيار ملف للرفع
  const fileInput = document.querySelector("input[type='file']");
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        alert("📂 اخترت الملف: " + fileInput.files[0].name);
      }
    });
  }
});
