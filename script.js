const toggleSwtich = document.querySelector("input[type=checkbox]");

function switchTheme(e) {
  console.log(e.target.checked);
}

toggleSwtich.addEventListener("change", switchTheme);
