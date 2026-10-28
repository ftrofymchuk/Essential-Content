
//  Example
// console.log("Before the function call");

// showMessage();

// console.log("After the function call");

// function showMessage() {
//     console.log("The function has run.");
// }



// FIRST 

const button = document.querySelector("#message-button");

const adventureMessage = document.querySelector("#adventure-message");

function showMessage() {
    adventureMessage.textContent = "Your next outdoor adventure is waiting!"
}

button.addEventListener("click", showMessage)

// SECOND

const colourButton = document.querySelector("#colour-button");

const colourCard = document.querySelector("#colour-card")

function changeBackground(){
    colourCard.classList.toggle("new-background");
}

colourButton.addEventListener("click", changeBackground)


// THIRD

const detailsButton =
    document.querySelector("#details-button");

const activityDetails =
    document.querySelector("#activity-details");

function toggleDetails() {
    activityDetails.classList.toggle("hidden");

    if (activityDetails.classList.contains("hidden")) {
        detailsButton.textContent = "Show Details";

        detailsButton.setAttribute(
            "aria-expanded",
            "false"
        );
    } else {
        detailsButton.textContent = "Hide Details";

        detailsButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }
}

detailsButton.addEventListener(
    "click",
    toggleDetails
);


// FOURTH

const countButton = document.querySelector("#count-button");

const visitorCount = document.querySelector("#visitor-count");

let count = 0;

function increaseCount() {
    count = count + 1;

    visitorCount.textContent = count;
}

function decreaseCount(){
    count = count - 1;

    visitorCount.textContent = count;
}

countButton.addEventListener("click", increaseCount)

const resetButton = document.querySelector("#reset-button");
function resetCount(){
    count = 0;

    visitorCount.textContent = count;
}

resetButton.addEventListener("click", resetCount)