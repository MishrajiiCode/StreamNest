// Movies and Web Series Data
const movies = [
    { title: "Sikandar Ka Muqaddar", img: "/movies img/sikandar.png", lang: "hindi", genre: "drama", link: "https://fast-dl.biz/dl/196a07" },
    { title: "I Want to Talk", img: "movie2.jpg", lang: "hindi", genre: "drama", link: "https://gofile.io/d/WcYBZ8" },
    { title: "The Sabarmati Report", img: "movie3.jpg", lang: "hindi", genre: "drama", link: "https://gofile.io/d/PU6G5U" },
    { title: "Pushpa: The Rise – Part 1", img: "movie4.jpg", lang: "hindi",genre: "drama", link: "https://gofile.io/d/sM2jCS" },
    { title: "Lucky Baskhar", img: "movie5.jpg", lang: "hindi",genre: "drama", link: "https://fast-dl.biz/dl/676728" },
    { title: "Geethanjali Malli Vachindi", img: "movie6.jpg", lang: "english", genre: "horror",link: "https://fast-dl.biz/dl/068d7c" },
    { title: "Tanhaji ", img: "movie7.jpg", lang: "hindi", genre: "drama", link: "https://fast-dl.biz/dl/9af6fd" },
    { title: "Movie 8", img: "movie8.jpg", lang: "english",genre: "drama", link: "movie8.mp4" },
    { title: "Movie 9", img: "movie9.jpg", lang: "hindi",genre: "drama", link: "movie9.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
    { title: "Movie 10", img: "movie10.jpg", lang: "english",genre: "drama", link: "movie10.mp4" },
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
