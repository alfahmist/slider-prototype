const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");
const slider = document.getElementById("slider");
const spans = document.getElementsByTagName("span");
const roundedContainer = document.getElementById("rounded-container");

var spanCount = 0;

// create span for each images
for (let i = 0; i < spans.length; i++) {
    const rounded = document.createElement("div");
    rounded.className = "rounded";
    roundedContainer.appendChild(rounded);
    console.log(i);
}

// select all rounded class
// put here because after create class
const getRoundeds = document.querySelectorAll(".rounded");
console.log(getRoundeds);
// set default active
getRoundeds[0].classList.add("active");

// loop through each button and add a click event listener
getRoundeds.forEach(function (getRounded, currentSpan) {
    getRounded.addEventListener("click", function () {
        // Scroll to here
        spans[currentSpan].scrollIntoView();
        // add class active from index
        getRoundeds[currentSpan].classList.add("active");
        // remove class active from spanCount
        getRoundeds[spanCount].classList.remove("active");
        // set spanCount with currentSpan
        spanCount = currentSpan;
        console.log(getRoundeds[currentSpan]);
    });
});

// button click to left
buttonLeft.addEventListener("click", function () {
    spanCount--;
    if (spanCount <= 0) {
        spanCount = 0;
    }

    spans[spanCount].scrollIntoView();

    getRoundeds[spanCount].classList.add("active");
    getRoundeds[spanCount + 1].classList.remove("active");
    console.log("left : " + spanCount);
});

// button click to right
buttonRight.addEventListener("click", function () {
    spanCount++;
    if (spanCount > spans.length - 1) {
        spanCount = 7;
    }
    spans[spanCount].scrollIntoView();

    getRoundeds[spanCount].classList.add("active");
    getRoundeds[spanCount - 1].classList.remove("active");

    console.log("right : " + spanCount);
});

console.log(spans);
