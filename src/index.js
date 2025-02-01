const buttons = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.getElementById("rating-card");
const resultsCard = document.getElementById("results-card");
const resultText = document.getElementById("result-text");

let choice;
buttons.forEach(button => {
    button.addEventListener("click", ()=>
    {
        choice = button.dataset["grade"];
        submitBtn.classList.remove("pointer-events-none");
    })
})

submitBtn.addEventListener("click", () => {
    ratingCard.classList.toggle("hidden");
    resultsCard.classList.remove("hidden");
    resultsCard.classList.add("flex");
    resultText.innerText = `You selected ${choice} out of 5`

})