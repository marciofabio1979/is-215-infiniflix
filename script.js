const submit = document.querySelector(".form-submit");

async function fetchMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function buscarFilmes(e) {
    e.preventDefault();
    const filme = document.querySelector(".form-input").value;
    const url = `https://www.omdbapi.com/?s=${filme}&apikey=e341acff`;
    const data = await fetchMovies(url);
    //Percorrendo a lista de filmes
    const ul = document.querySelector("#movies");
    let content = "";
    for (let i = 0; i < data.Search.length; i++) {
        content += `<li class="app-movies-all-card">`;
        content += `<figure class="app-movies-all-figure">`;
        content += `<img class="app-movies-all-thumb" src="${data.Search[i].Poster}" />`;
        content += `</figure>`;
        content += `<legend class="app-movies-all-legend">`;
        content += `<span class="app-movies-all-year">${data.Search[i].Year}</span>`;
        content += `<h2 class="app-movies-all-title">${data.Search[i].Title}</h2>`;
        content += `</legend>`;
        content += `</li>`;
    }
    ul.innerHTML = content;
}

submit.addEventListener("click", buscarFilmes);