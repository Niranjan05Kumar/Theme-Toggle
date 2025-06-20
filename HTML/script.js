const body = document.body;
const switchCheckbox = document.querySelector(".switch input[type='checkbox']");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
}
switchCheckbox.addEventListener("change", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});