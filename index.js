var element = document.getElementById("element");
var elementResult = document.getElementById("elementResult");

element.addEventListener("mouseenter", function() {
    elementResult.classList.add("h-[23rem]")
    elementResult.classList.add("py-8")
    elementResult.classList.add("opacity-100")
});

elementResult.addEventListener("mouseenter", function() {
    elementResult.classList.add("h-[23rem]")
    elementResult.classList.add("py-8")
    elementResult.classList.add("opacity-100")
});

elementResult.addEventListener("mouseleave", function() {
    elementResult.classList.remove("h-[23rem]")
    elementResult.classList.remove("py-8")
    elementResult.classList.remove("opacity-100")
});

element.addEventListener("mouseleave", function() {
    elementResult.classList.remove("h-[23rem]")
    elementResult.classList.remove("py-8")
    elementResult.classList.remove("opacity-100")
});