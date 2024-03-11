import { posts } from "./posts.js";

function generatePosts(posts) {
    for (let post in posts) {
        const grid = document.querySelector(".grid");
        let htmlElements = `
                <div class="post">
                <img src="${posts[post].img}" loading="lazy">
                <div class="post-details">
                    <h2>${posts[post].title}</h2>
                    <p>${posts[post].distance}</p>
                    <p>${posts[post].date}</p>
                    <h3>${posts[post].pricePerNight} <span>/ night</span></h3>
                </div>
            </div>
        `
        grid.innerHTML += htmlElements;
    }
}

generatePosts(posts)
