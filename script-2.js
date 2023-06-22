
// <----my code ---->
var likes = document.querySelector("#Liked-1");
var topCount = 9;

function liked() {
    topCount++;
    console.log(topCount);
    likes.innerText = topCount + " like(s)";
};



// likes 2

var likes2 = document.querySelector("#Liked-2");
var topCount2 = 12;

function liked2() {
    topCount2++;
    console.log(topCount2);
    likes2.innerText = topCount2 + " like(s)";
};


// likes 3

var likes3 = document.querySelector("#Liked-3");
var topCount3 = 9;

function liked3() {
    topCount3++;
    console.log(topCount3);
    likes3.innerText = topCount3 + " like(s)";
}
