
var likeOne = document.querySelector("#Liked-1");
var topCount = 9;
var likeTwo = document.querySelector("#Liked-2");
var topCount2 = 12;
var likeTwo = document.querySelector("#Liked-3");
var topCount3 = 9;


function liked() {
    if (likeOne == topCount ) {
        console.log(topCount++ + "like(s)");


    } else if (likeTwo == topCount2) {
        console.log(topCount2++ + "like(s)");

    } else {
        console.log(topCount3++ + "like(s)");

    }
    likes.innerText = topCount + " like(s)";
    likes.innerText = topCount2 + " like(s)";
    likes.innerText = topCount3 + " like(s)";
}


// topCount++;
//     topCount2++;
//     topCount3++;
//     console.log(topCount, topCount2, topCount3);
//     likes.innerText = topCount + " like(s)";
//     likes.innerText = topCount2 + " like(s)";
//     likes.innerText = topCount3 + " like(s)"; 