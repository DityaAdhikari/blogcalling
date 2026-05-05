// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  /* ===== MOBILE MENU TOGGLE ===== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".headerleft");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
const form = document.querySelector("#guest-writing form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        isValid = false;
        input.style.border = "1px solid red";
      } else {
        input.style.border = "1px solid #444";
      }
    });

    if (isValid) {
      alert("Form submitted successfully!");

      form.reset(); // clear form
      document.getElementById("guest-writing").classList.add("hidden"); // close popup
    } else {
      alert("Please fill all fields.");
    }
  });
}
  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ===== GUEST WRITING POPUP ===== */
  const openBtn = document.querySelector(".open-popup");
  const popup = document.getElementById("guest-writing");
  const closeBtn = document.querySelector(".close");

  if (openBtn && popup) {
    openBtn.addEventListener("click", () => {
      popup.classList.remove("hidden");
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  }

  // Close when clicking outside
  if (popup) {
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.add("hidden");
      }
    });
  }

  // Close with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup) {
      popup.classList.add("hidden");
    }
  });

  /* ===== BLOG CLICK → OPEN PAGE ===== */
  const blogs = document.querySelectorAll(".blog");

  const pages = [
    "blog1.html",
    "blog2.html",
    "blog3.html"
  ];

  blogs.forEach((blog, index) => {
    blog.addEventListener("click", () => {
      if (pages[index]) {
        window.location.href = pages[index];
      }
    });
  });

});