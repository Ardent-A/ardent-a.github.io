// const button = document.getElementById("lore")
// const loreInner = document.getElementById("lore-inner")
// loreInner.style.display = "none"

// button.addEventListener("click", function() {
//     if (loreInner.style.display === "none") {
//         loreInner.style.display = "block"
//     } else if (loreInner.style.display === "block") {
//         loreInner.style.display = "none"
//     }
// })

const acc = document.getElementsByClassName("accordion")
const nav = document.getElementById("nav")
const checkpoint = 300;
let i;

for (i = 0; i < acc.length; i ++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle(acc[i])
        let panel = this.nextElementSibling
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
    })
}

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll < checkpoint) {
    opacity = 1;
  } else {
    opacity = 0.9;
  }
  nav.style.opacity = opacity;
});