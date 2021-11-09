function UI() {

}

UI.prototype.addMovieToUI = (newMovie) => {
    // const tbody = document.getElementById("Movies");
    tbody.innerHTML += `<tr>
                            <td><img src="${newMovie.movieBanner}" class="img-fluid img-thumbnail" style = "width:300px"></td>
                            <td>${newMovie.movieName}</td>
                            <td>${newMovie.movieDirector}</td>
                            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
                         <tr>`
}

UI.prototype.clearInputs = (array) => {
    array.forEach(item => {
        item.value = ""
    });
}

UI.prototype.alertMessage = (message, type) => {
    const cardBody = document.getElementsByClassName("card-body")[0];
    cardBody.lastElementChild.innerHTML += `<div class="alert alert-${type}" role="alert">${message}</div>`
    setTimeout(() => {
        cardBody.lastElementChild.innerHTML = "";
    }, 1000);

}

UI.prototype.deleteMovieToUI = (tableRow) => {
    console.log(tableRow)
    tableRow.remove();
}