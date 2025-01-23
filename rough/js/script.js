document.addEventListener("DOMContentLoaded", function () {
    const container1 = document.getElementById("bill-monthly");
    const container2 = document.getElementById("bill-annually");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function () {
        if (container1.classList.contains("visible")) {
            container1.classList.remove("visible");
            container2.classList.add("visible");
        } else {
            container2.classList.remove("visible");
            container1.classList.add("visible");
        }
    });
});