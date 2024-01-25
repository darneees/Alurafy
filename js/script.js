window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".popup").classList.add("show");
    }, 1100);
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("show");
});
