const btn = document.querySelector("button");
const menu = document.querySelector(".dropdown-content");

function displayMenu() {
  menu.style.display = "flex";
}

function hideMenu(event) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
      menu.style.display = "none";
    }
  }

btn.addEventListener("click", displayMenu);


document.addEventListener("click", hideMenu);