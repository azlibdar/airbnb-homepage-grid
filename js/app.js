// Data
const posts = [
    { title: "Tokyo, Japan", distance: "4,936 kilometres away", date: "10–15 Apr", pricePerNight: "$1,248", img: "https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg" },
    { title: "Paris, France", distance: "6,242 kilometres away", date: "3–8 May", pricePerNight: "$1,355", img: "https://a0.muscache.com/im/pictures/miso/Hosting-883697523223642736/original/57d9cca1-3ddd-43a6-ad0b-1178f1518dcb.jpeg" },
    { title: "New York City, USA", distance: "8,598 kilometres away", date: "18–23 Jun", pricePerNight: "$1,123", img: "https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/15110762-267f-4a08-88ae-2d9d3603284d.jpeg" },
    { title: "Sydney, Australia", distance: "12,032 kilometres away", date: "7–12 Jul", pricePerNight: "$1,476", img: "https://a0.muscache.com/im/pictures/cde2916e-eb85-4020-8a5f-fba017eddec8.jpg" },
    { title: "Rio de Janeiro, Brazil", distance: "9,861 kilometres away", date: "21–26 Aug", pricePerNight: "$1,307", img: "https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg" },
    { title: "Moscow, Russia", distance: "7,190 kilometres away", date: "15–20 Sep", pricePerNight: "$1,199", img: "https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" },
    { title: "Cape Town, South Africa", distance: "10,243 kilometres away", date: "12–17 Oct", pricePerNight: "$1,423", img: "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/270e6f4f-5fea-4117-a552-523370f62a74.jpeg" },
    { title: "Dubai, UAE", distance: "3,139 kilometres away", date: "5–10 Nov", pricePerNight: "$1,136", img: "https://a0.muscache.com/im/pictures/miso/Hosting-50545526/original/af14ce0b-481e-41be-88d1-b84758f578e5.jpeg" },
    { title: "London, UK", distance: "7,921 kilometres away", date: "24–29 Dec", pricePerNight: "$,1289", img: "https://a0.muscache.com/im/pictures/miso/Hosting-41191586/original/264cf259-bdcd-42d0-ae9d-66968b26121d.jpeg" },
    { title: "Rome, Italy", distance: "8,380 kilometres away", date: "2–7 Jan", pricePerNight: "$,1375", img: "https://a0.muscache.com/im/pictures/miso/Hosting-50699164/original/8ab5140b-dbf1-4d0e-a026-d5735af23703.jpeg" },
    { title: "Seoul, South Korea", distance: "4,834 kilometres away", date: "14–19 Feb", pricePerNight: "$1,244", img: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg" },
    { title: "Berlin, Germany", distance: "6,960 kilometres away", date: "9–14 Mar", pricePerNight: "$1,150", img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1059835496185405643/original/32da6f5a-5d1d-4d43-80dc-c4c45be38953.jpeg" },
    { title: "Bangkok, Thailand", distance: "3,481 kilometres away", date: "20–25 Apr", pricePerNight: "$1,342", img: "https://a0.muscache.com/im/pictures/miso/Hosting-1067506863191780660/original/b932b018-b535-48c8-b283-9f2363e3c248.jpeg" },
    { title: "Toronto, Canada", distance: "7,973 kilometres away", date: "11–16 May", pricePerNight: "$1,223", img: "https://a0.muscache.com/im/pictures/ec114c80-a0b1-474f-beff-513aa394bcaa.jpg" },
    { title: "Madrid, Spain", distance: "7,784 kilometres away", date: "8–13 Jun", pricePerNight: "$1,398", img: "https://a0.muscache.com/im/pictures/miso/Hosting-572187002420659819/original/26eb276b-7dea-41bb-923c-1f02d15622d3.jpeg" },
    { title: "Mumbai, India", distance: "2,924 kilometres away", date: "19–24 Jul", pricePerNight: "$1,432", img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51076362/original/13ed0502-2473-4d4b-a9e7-17240eb701d8.jpeg" },
];

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