const bagCount = document.querySelector("[data-bag-count]");
const addButtons = document.querySelectorAll(".add-to-bag");

let itemCount = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    bagCount.textContent = itemCount;
    document.querySelector(".bag-link").setAttribute("aria-label", `Shopping bag, ${itemCount} item${itemCount === 1 ? "" : "s"}`);

    const originalText = button.innerHTML;
    button.innerHTML = "Added to bag <span aria-hidden=\"true\">✓</span>";
    button.disabled = true;

    window.setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 1400);
  });
});