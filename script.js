// Movies and Web Series Data
const movies = [
    { title: "Sikandar Ka Muqaddar", img: "movies img/Sikandar Ka Muqaddar.png", lang: "hindi", genre: "drama", link: "https://fast-dl.biz/dl/196a07" },
    { title: "I Want to Talk", img: "movies img/i want to talk.png", lang: "hindi", genre: "drama", link: "https://gofile.io/d/WcYBZ8" },
    { title: "The Sabarmati Report", img: "movies img/1.png", lang: "hindi", genre: "drama", link: "https://gofile.io/d/PU6G5U" },
    { title: "Pushpa: The Rise – Part 1", img: "movies img/2.png", lang: "hindi",genre: "drama", link: "https://gofile.io/d/sM2jCS" },
    { title: "Lucky Baskhar", img: "movies img/3.png", lang: "hindi",genre: "drama", link: "https://fast-dl.biz/dl/676728" },
    { title: "Geethanjali Malli Vachindi", img: "movies img/4.png", lang: "hindi", genre: "horror",link: "https://fast-dl.biz/dl/068d7c" },
    { title: "Tanhaji ", img: "movies img/5.png", lang: "hindi", genre: "drama", link: "https://fast-dl.biz/dl/9af6fd" },
    { title: "Munjya", img: "movies img/6.png", lang: "hindi",genre: "horror", link: "https://fast-dl.biz/dl/2d8f66" },
    { title: "Blue Van", img: "movies img/9.png", lang: "punjabi",genre: "drama", link: "https://fast-dl.biz/dl/df814d" },
    { title: "Madgaon Express", img: "movies img/8.png", lang:  "hindi",genre: "drama", link: "https://fast-dl.biz/dl/754d4b" },
    { title: "Blue Beetle ", img: "movies img/7.png", lang: "hindi",genre: "sci-fi", link: "https://fast-dl.biz/bb/ae747d" },
    { title: "Kakuda", img: "movies img/10.png", lang: "hindi",genre: "horror", link: "https://fast-dl.biz/dl/50784e" },
    { title: "Ruslaan", img: "movies img/11.png", lang: "hindi",genre: "action", link: "https://fast-dl.biz/dl/9e5299" },
    { title: "Yodha", img: "movies img/12.png", lang: "hindi",genre: "action", link: "https://fast-dl.biz/dl/bbfd5d" },
    { title: "Saripodhaa Sanivaaram", img: "movies img/13.png", lang: "hindi",genre: "thriller", link: "https://fast-dl.biz/dl/9b5e28" },
    { title: "Murder Mubarak", img: "movies img/14.png", lang: "hindi",genre: "thriller", link: "https://fast-dl.biz/dl/9a5bf5" },
    { title: "Stree 2: Sarkate Ka Aatank", img: "movies img/15.png", lang: "hindi",genre: "horror", link: "https://fast-dl.biz/dl/baa8cf" },
    { title: "Devara", img: "movies img/16.png", lang: "hindi",genre: "action", link: "https://fast-dl.biz/dl/3f91fb" },
    { title: "Bhool Bhulaiyaa 2", img: "movies img/17.png", lang: "hindi",genre: "horror", link: "https://mega.nz/file/MCczyaRb#XEC084UZcY9dh3a0jcJwrL-_wRgIHvaRZYLP3D3H0e0" },
    { title: "Venom: The Last Dance ", img: "movies img/18.png", lang: "english",genre: "drama", link: "https://fast-dl.biz/dl/ff58e9" },
    { title: "Tiger 3", img: "movies img/19.png", lang: "english",genre: "drama", link: "https://fast-dl.biz/bb/8ff36b" },
    { title: "Dunki ", img: "movies img/20.png", lang: "english",genre: "drama", link: "https://fast-dl.biz/bb/4940d0" },
    { title: "Rocky Aur Rani Kii Prem Kahaani ", img: "movies img/21.png", lang: "english",genre: "drama", link: "https://download.megaup.net/?idurl=0lixLaV5L89JKamcHXUbeg7YMV1rUtUeq2lhsvqePcYfjBwoEis16TMso3H8/iz8vmfwJEvAO0YLerkWiT/PbQu8Ig2LPFhOxKZrTngfouMOczke+2wYPEL028Z5HgHQWDVneEOKBaRVUvxn+hg3Ig==&idfilename=Rocky%20Aur%20Rani%20Kii%20Prem%20Kahaani%202023%20Hindi%20www.downloadhub.us%201080p%20HDRip%20ESubs.mkv&idfilesize=2.87%20GB" },
    { title: "Jawan", img: "movies img/22.png", lang: "english",genre: "drama", link: "https://fast-dl.biz/dl/34b212" },
    { title: "Fighter", img: "movies img/23.png", lang: "english",genre: "drama", link: "https://fast-dl.biz/dl/926f92" },
    { title: "Bhediya", img: "movies img/24.png", lang: "english",genre: "drama", link: "https://fast-dl.biz/bb/66676c" },
    { title: "Laal Singh Chaddha", img: "movies img/25.png", lang: "english",genre: "drama", link: "https://waaw.to/watch_video.php?v=VVNOVXdFblhPUmZZYzg3eGp3OXJQbUZGUzJybmdsb0lLNUpyb2ZROHF4dkc5V01jY1hqeWFjWlhRRWlvNkc0YQ%3D%3D#iss=MTAzLjE3OS4xLjI1" },
    { title: "Heropanti 2", img: "movie10.jpg", lang: "english",genre: "drama", link: "https://send.cm/d/BYLE" },
    { title: "Kisi Ka Bhai Kisi Ki Jaan ", img: "movie10.jpg", lang: "english",genre: "drama", link: "https://fast-dl.biz/bb/73401e" },
    { title: "The Promised Land", img: "movie10.jpg", lang: "english",genre: "drama", link: "https://fast-dl.biz/dl/cb0e49" },
    { title: "Satyaprem Ki Katha ", img: "movie10.jpg", lang: "english",genre: "drama", link: "https://fast-dl.biz/bb/d9d8ab" },
    { title: "Shazam! Fury of the Gods", img: "movie10.jpg", lang: "english",genre: "drama", link: "https://fast-dl.biz/bb/09189c" },
    { title: "Drishyam 2", img: "movie10.jpg", lang: "english",genre: "drama", link: "https://fast-dl.biz/bb/f0c884" },
    { title: "Maharaja", img: "movie10.jpg", lang: "english",genre: "drama", link: "https://fast-dl.biz/dl/269f6e" },
];

const webSeries = [
    { title: "Web Series 1", img: "webseries1.jpg", lang: "hindi", link: "webseries1.mp4" },
    { title: "Web Series 2", img: "webseries2.jpg", lang: "english", link: "webseries2.mp4" },
    { title: "Web Series 3", img: "webseries3.jpg", lang: "hindi", link: "webseries3.mp4" },
    { title: "Web Series 4", img: "webseries4.jpg", lang: "english", link: "webseries4.mp4" },
    { title: "Web Series 5", img: "webseries5.jpg", lang: "hindi", link: "webseries5.mp4" },
    { title: "Web Series 6", img: "webseries6.jpg", lang: "english", link: "webseries6.mp4" },
    { title: "Web Series 7", img: "webseries7.jpg", lang: "hindi", link: "webseries7.mp4" },
    { title: "Web Series 8", img: "webseries8.jpg", lang: "english", link: "webseries8.mp4" },
    { title: "Web Series 9", img: "webseries9.jpg", lang: "hindi", link: "webseries9.mp4" },
    { title: "Web Series 10", img: "webseries10.jpg", lang: "english", link: "webseries10.mp4" },   
];

// Filter by Genre
function filterByGenre(genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    const filteredWebSeries = webSeries.filter(series => series.genre === genre);

    populateGrid("movies-grid", filteredMovies);
    populateGrid("webseries-grid", filteredWebSeries);
    
}

// Populate Grid Function
function populateGrid(gridId, data) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <a href="${item.link}" download>Download</a>
            <a href="${item.link}" target="_blank">Watch Now</a>
        `;
        grid.appendChild(card);
    });
}

// Show Section Function
function showSection(section) {
    const moviesSection = document.getElementById("movies");
    const webSeriesSection = document.getElementById("webseries");

    if (section === "movies") {
        populateGrid("movies-grid", movies);
        moviesSection.classList.remove("hidden");
        webSeriesSection.classList.add("hidden");
    } else if (section === "webseries") {
        populateGrid("webseries-grid", webSeries);
        moviesSection.classList.add("hidden");
        webSeriesSection.classList.remove("hidden");
    } else {
        populateGrid("movies-grid", movies);
        populateGrid("webseries-grid", webSeries);
        moviesSection.classList.remove("hidden");
        webSeriesSection.classList.remove("hidden");
    }
}

// Language Filter Event
document.getElementById("language-select").addEventListener("change", (event) => {
    const selectedLang = event.target.value;

    const filteredMovies = movies.filter(movie => selectedLang === "all" || movie.lang === selectedLang);
    const filteredWebSeries = webSeries.filter(series => selectedLang === "all" || series.lang === selectedLang);

    const activeSection = document.querySelector("main .section:not(.hidden)").id;
    if (activeSection === "movies") {
        populateGrid("movies-grid", filteredMovies);
    } else if (activeSection === "webseries") {
        populateGrid("webseries-grid", filteredWebSeries);
    } else {
        populateGrid("movies-grid", filteredMovies);
        populateGrid("webseries-grid", filteredWebSeries);
    }
});

// Search Functionality
document.getElementById("search-bar").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    const filteredWebSeries = webSeries.filter(series => series.title.toLowerCase().includes(query));

    const activeSection = document.querySelector("main .section:not(.hidden)").id;
    if (activeSection === "movies") {
        populateGrid("movies-grid", filteredMovies);
    } else if (activeSection === "webseries") {
        populateGrid("webseries-grid", filteredWebSeries);
    } else {
        populateGrid("movies-grid", filteredMovies);
        populateGrid("webseries-grid", filteredWebSeries);
    }
});

// Initial Load: Show All Content
showSection("all");
