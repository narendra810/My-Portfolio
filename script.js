document.addEventListener("DOMContentLoaded", () => {

  // Automatically update the footer year.
  const year = document.querySelector("footer");

  if (year) {
    year.innerHTML = `
      <div class="wrap">
        © ${new Date().getFullYear()} [YOUR NAME]
      </div>
    `;
  }


  // Close mobile-style navigation behaviour if we add it later.
  // Kept intentionally minimal for now.

});