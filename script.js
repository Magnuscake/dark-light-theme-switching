const toggleSwtich = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Switch between light or dark images
function switchIllustrations(color) {
  image1.src = `assets/undraw_Content_${color}.svg`;
  image2.src = `assets/undraw_Collaboration_${color}.svg`;
  image3.src = `assets/undraw_Preferences_${color}.svg`;
}

// Dark mode styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0/ 50%)";
  textBox.style.color = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  switchIllustrations("dark");
}

// Light mode styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.color = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  switchIllustrations("light");
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}

toggleSwtich.addEventListener("change", switchTheme);
