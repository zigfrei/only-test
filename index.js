const clickLocations = document.querySelectorAll(".click");
const buttons = document.querySelectorAll(".test-block__button");

for (const location of clickLocations) {
  location.addEventListener("click", handleClick);
}

function handleClick(e) {
  e.stopPropagation();
  if (Array.from(e.currentTarget.classList).includes("test-block__button")) {
    e.currentTarget.classList.toggle("test-block__button_active");
  } else {
    for (const button of buttons) {
      if (Array.from(button.classList).includes("test-block__button_active")) {
        button.classList.remove("test-block__button_active");
      }
    }
  }
}
