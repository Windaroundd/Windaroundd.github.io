// Career information toggle functionality
document.querySelectorAll(".career-card").forEach((card) => {
  const header = card.querySelector(".header");
  const section = card.querySelector(".section");
  const viewMoreBtn = document.createElement("button");
  viewMoreBtn.className = "view-more";
  viewMoreBtn.textContent = "View More";

  // Add view more button to header
  header.appendChild(viewMoreBtn);

  // Initially hide all sections
  if (section) {
    section.classList.add("hidden");
  }

  viewMoreBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent header click event

    const isHidden = section.classList.contains("hidden");

    // Toggle section visibility
    section.classList.toggle("hidden");

    // Update button text
    viewMoreBtn.textContent = isHidden ? "View Less" : "View More";
  });
});
