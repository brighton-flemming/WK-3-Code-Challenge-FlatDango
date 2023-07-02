document.addEventListener("DOMContentLoaded", () => {
  const filmsList = document.getElementById("films");

  function fetchMovieDetails() {
    fetch("http://localhost:3000/films/1")
      .then((response) => response.json())
      .then((data) => {
        displayMovieDetails(data);
      })
      .catch((error) => {
        console.error("Blunder in obtaining the movie details:", error);
      });
  }

  fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then((films) => {
      films.forEach((film) => {
        const filmItem = document.createElement("li");
        filmItem.classList.add("film", "item");
        filmItem.textContent = film.title;
        filmItem.addEventListener("click", () => displayMovieDetails(film));
        filmsList.appendChild(filmItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching films:", error);
    });

  function displayMovieMenu(movies) {
    const movieMenu = document.getElementById("films");

    movies.forEach((movie) => {
      const movieItem = document.createElement("li");
      movieItem.textContent = movie.title;
      movieItem.classList.add("film", "item");
      movieItem.addEventListener("click", () => {
        displayMovieDetails(movie);
      });
      movieMenu.appendChild(movieItem);
    });
  }

  function displayMovieListings(movies) {
    const movieListingsSection = document.getElementById("movie-listings");

    movies.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie-listing");

      const moviePoster = document.createElement("img");
      moviePoster.src = movie.poster;
      moviePoster.alt = movie.title;
      moviePoster.classList.add("movie-poster");
      movieDiv.appendChild(moviePoster);

      const movieDetails = document.createElement("div");
      movieDetails.classList.add("movie-details");

      const movieTitle = document.createElement("h3");
      movieTitle.textContent = movie.title;
      movieTitle.classList.add("movie-title");
      movieDetails.appendChild(movieTitle);

      const runtimes = document.createElement("ul");
      movie.runtimes.forEach((runtime) => {
        const runtimeItem = document.createElement("li");
        runtimeItem.textContent = runtime;
        runtimes.appendChild(runtimeItem);
      });
      movieDetails.appendChild(runtimes);

      movieDiv.appendChild(movieDetails);
      movieListingsSection.appendChild(movieDiv);
    });
  }

  function displayMovieDetails(movie) {
    const movieDetailsSection = document.getElementById("movie-details");
    movieDetailsSection.innerHTML = "";

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    moviePoster.alt = movie.title;
    movieDetailsSection.appendChild(moviePoster);

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;
    movieDetailsSection.appendChild(movieTitle);

    const movieRuntime = document.createElement("p");
    movieRuntime.textContent = "Runtime: " + movie.runtime + " minutes";
    movieDetailsSection.appendChild(movieRuntime);

    const movieShowtime = document.createElement("p");
    movieShowtime.textContent = "Showtime: " + movie.showtime;
    movieDetailsSection.appendChild(movieShowtime);

    const availableTickets = movie.capacity - movie.tickets_sold;
    const movieTickets = document.createElement("p");
    movieTickets.textContent = "Available Tickets: " + availableTickets;
    movieDetailsSection.appendChild(movieTickets);

    const buyTicketButton = document.createElement("button");
    buyTicketButton.textContent = "Buy Tickets";
    buyTicketButton.classList.add("ticket-button");
    buyTicketButton.addEventListener("click", () => {
      if (availableTickets > 0) {
        movie.tickets_sold++;
        displayMovieDetails(movie);
      }
    });
    if (availableTickets === 0) {
      buyTicketButton.textContent = "Sold Out";
      buyTicketButton.classList.add("sold-out");
      buyTicketButton.disabled = true;
    }
    movieDetailsSection.appendChild(buyTicketButton);
  }

  window.addEventListener("load", () => {
    fetchMovieDetails();
  });
});
