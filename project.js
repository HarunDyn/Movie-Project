const title = document.getElementById("title");
const director = document.getElementById("director");
const url = document.getElementById("url");
const addButton = document.getElementById("movie-form").lastElementChild;
const table = document.getElementsByClassName("table")[0];
const clearMovies = document.getElementById("clear-movies");
const tbody = document.getElementById("Movies");


const ui = new UI();
const storage = new Storage();


eventsListener();

function eventsListener() {
    addButton.addEventListener("click", addNewMovie);
    window.addEventListener("DOMContentLoaded", () => {
        storage.loadStorageToUI();
    });
    table.addEventListener("click", deleteMovie);
    clearMovies.addEventListener("click", clearAllMovies)

}


function clearAllMovies() {

    while (tbody.firstElementChild != null) {

        tbody.firstElementChild.remove();
    };

    storage.clearStorage();

}


function addNewMovie(e) {
    const movieName = title.value.trim();
    const movieDirector = director.value.trim();
    const movieBanner = url.value.trim();


    if (movieName === "" || movieDirector === "" || movieBanner === "") {
        confirm("please enter a information")
    } else {
        const newMovie = new Movie(movieBanner, movieName, movieDirector);
        ui.addMovieToUI(newMovie);
        ui.alertMessage("add movie successfully..!", "success");
        storage.addMovieToStorage(newMovie);


    }
    ui.clearInputs([title, director, url]);
    e.preventDefault();
}

function deleteMovie(e) {
    if (e.target.id === "delete-movie") {
        ui.deleteMovieToUI(e.target.parentElement.parentElement);
        console.log(e.target.parentElement.parentElement)
        storage.deleteMovieToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
        ui.alertMessage("delete movie successfully..!", "danger");

    }
}