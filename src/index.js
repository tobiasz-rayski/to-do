import "../src/styles/main.scss";

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  if (btn.classList.contains("open")) {
    btn.classList.remove("open");
    btn.classList.add("close");
  } else if (btn.classList.contains("close")) {
    btn.classList.remove("close");
    btn.classList.add("open");
  } else {
    btn.classList.add("open");
  }
});
