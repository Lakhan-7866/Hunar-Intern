document.addEventListener("DOMContentLoaded", () => {
    const movies = document.querySelectorAll(".movie");
    movies.forEach(movie => {
        movie.addEventListener("click", () => {
            alert(You selected: ${movie.querySelector("p").innerText});
        });
    });
});
