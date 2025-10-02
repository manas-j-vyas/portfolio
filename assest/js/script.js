// Auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle contact form submission
function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent (demo).");
  return false;
}
  // Clear form fields when page loads
  window.addEventListener("pageshow", function (event) {
    const form = document.querySelector("form");
    if (form) form.reset();
  });

