// let t=prompt("Enter the video title")
// let cn=prompt("Enter the channel name")
// let v=prompt("Enter the number of views")
// let mo=prompt("Enter the how old video Is")
// let d=prompt("Enter the video duration")
// let th=prompt("Enter the thumbnail")

// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
function createCard() {
    // let card=document.createElement("div")
    // card.setAttribute("class","design")
    // card.innerHTML="This is card"
    // document.querySelector(".container").prepend(card)
    let title = prompt("Enter the video title")
    let cName = prompt("Enter the channel name")
    let views = prompt("Enter the number of views")
    let monthsOld = prompt("Enter the how old video Is")
    let duration = prompt("Enter the video duration")
    let thumbnail = prompt("Enter the thumbnail")
    let viewstr
    if (views < 1000) {
        viewstr = views
    }
    else if (views >= 1000 && views < 999999) {
        viewstr = views / 1000 + "K"
    }
    else {
        viewstr = views / 1000000 + "M"
    }
    let card = `<div class="card">
                    <div class="image">
                        <img src="${thumbnail}" alt="">
                        <div class="capsule">${duration}</div>
                    </div>
                    <div class="text">
                        <h1>${title}</h1>
                        <p>${cName} • ${viewstr} views • ${monthsOld} months ago</p>
                    </div>
                </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + card
}
// createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "CodeWithHarry", 1500000, 2, "6:13", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")

// https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ

// JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77 37000 4 24:12