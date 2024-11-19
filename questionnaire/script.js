document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("questionnaireForm");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form submitted:", data);

    // Show the popup
    popup.style.display = "block";

    // Clear the form
    form.reset();
  });

  // Close the popup when the user clicks the close button
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close the popup when clicking outside of it
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
