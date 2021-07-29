// here functionality start
const inputs = document.querySelectorAll(".controls input");
function clickFunc() {
    const suffix = this.dataset.unit || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
inputs.forEach(input => {
    input.addEventListener("mousemove", clickFunc);
});
inputs.forEach(input => {
    input.addEventListener("change", clickFunc);
})