var likes = document.querySelector("#liked-1");
var topCount = 3;

function liked() {
    topCount++;
    console.log(topCount);
    likes.innerText = topCount + " like(s)";
}
