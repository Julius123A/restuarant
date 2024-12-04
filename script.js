// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll for Navigation Links
  const menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetID = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add animation on scroll
  const featureSections = document.querySelectorAll(".feature-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 1s ease-in-out forwards";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  featureSections.forEach(section => {
    observer.observe(section);
  });

  // Payment Form Submission
  const paymentForm = document.getElementById("paymentForm");
  paymentForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("paymentName").value;
    const address = document.getElementById("paymentAddress").value;
    const amount = document.getElementById("paymentAmount").value;

    if (name && address && amount) {
      alert(`Payment successful! \nName: ${name}\nAddress: ${address}\nAmount: $${amount}`);
      paymentForm.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });

  // Hero Section Animation on Page Load
  const heroSection = document.querySelector(".hero");
  heroSection.style.opacity = "0";
  heroSection.style.transform = "translateY(50px)";
  setTimeout(() => {
    heroSection.style.transition = "opacity 1.5s ease, transform 1.5s ease";
    heroSection.style.opacity = "1";
    heroSection.style.transform = "translateY(0)";
  }, 100);
});
