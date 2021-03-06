const toggleSwitch = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_MODE = "dark";
const LIGHT_MODE = "light";

// Switch between light or dark images
function switchIllustrations(mode) {
  image1.src = `assets/undraw_Content_${mode}.svg`;
  image2.src = `assets/undraw_Collaboration_${mode}.svg`;
  image3.src = `assets/undraw_Preferences_${mode}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0/ 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";

  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";

  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? switchIllustrations("dark") : switchIllustrations("light");
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_MODE);
    localStorage.setItem("theme", DARK_MODE);
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_MODE);
    localStorage.setItem("theme", LIGHT_MODE);
    toggleDarkLightMode(false);
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Check localStorage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === DARK_MODE) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
