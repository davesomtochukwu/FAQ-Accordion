const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");
let activeAccordionIndex;

plusIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    closeNonActiveAccordions();
    showOrHideAccordion(icon, "minus-icon");
    activeAccordionIndex = Array.from(plusIcons).indexOf(icon);
  });
});

minusIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    showOrHideAccordion(icon, "plus-icon");
  });
});

function showOrHideAccordion(icon, iconType) {
  // Find the parent accordion item
  const accordionItem = icon.closest(".accordion-item");

  if (accordionItem) {
    // Find the <p> tag inside the same accordion item
    const accordionBody = accordionItem.querySelector(".accordion-body");
    if (accordionBody) {
      // toggle visibility
      accordionBody.classList.toggle("hidden");
    }

    icon.classList.toggle("hidden");
    // Hide the plus icon
    const minusIcon = accordionItem.querySelector(`.${iconType}`);
    if (minusIcon) minusIcon.classList.toggle("hidden"); // Show the minus icon
  }
}

function closeNonActiveAccordions() {
  if (activeAccordionIndex === 0 || activeAccordionIndex) {
    const activeAcc = plusIcons[activeAccordionIndex];

    showOrHideAccordion(activeAcc, "minus-icon");
  }
}
