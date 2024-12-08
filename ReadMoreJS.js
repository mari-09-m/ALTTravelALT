// ****************************Read More******************

const buttons = document.querySelectorAll(".toggle-button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const hiddenText = button.previousElementSibling.querySelector(".hidden-text");
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            hiddenText.style.display = "inline";
            button.textContent = "Read Less";
        } else {
            hiddenText.style.display = "none";
            button.textContent = "Read More";
        }
    });
});
