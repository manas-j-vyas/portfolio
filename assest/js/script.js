// Auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle contact form submission
function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent (demo).");
  return false;
}
