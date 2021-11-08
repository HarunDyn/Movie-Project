function Storage() {

}


Storage.prototype.addMovieToStorage = (newMovie) => {
    let movies = storage.getMoviesToStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies))

}

Storage.prototype.getMoviesToStorage = () => {
    let movies;

    if (localStorage.getItem("movies") != null) {
        movies = JSON.parse(localStorage.getItem("movies"));
    } else {
        movies = [];
    }

    return movies;
}

Storage.prototype.loadStorageToUI = () => {
    let movies = storage.getMoviesToStorage();
    const tbody = document.getElementById("Movies");
    movies.forEach(movie => {
        tbody.innerHTML += `<tr>
                                            <td><img src="${movie.movieBanner}" class="img-fluid img-thumbnail" style = "width:300px"></td>
                                            <td>${movie.movieName}</td>
                                            <td>${movie.movieDirector}</td>
                                            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
                         <tr>`
    });

    localStorage.setItem("movies", JSON.stringify(movies))

}

Storage.prototype.deleteMovieToStorage = (elementToDelete) => {
    let movies = storage.getMoviesToStorage();
    movies.forEach((movie, index) => {
        if (movie.movieName == elementToDelete) {
            movies.splice(index, 1);
        }
    });

    localStorage.setItem("movies", JSON.stringify(movies))
}


Storage.prototype.clearStorage = () => {

    localStorage.removeItem("movies")

}