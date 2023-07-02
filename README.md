# WK-3-Code-Challenge-FlatDango---Compulsory
Movie Ticket Booking Web Application
This is a simple movie ticket booking web application that allows users to view a list of movies, see the details of each movie, and buy tickets for available shows. The application fetches movie data from a server and displays it on the frontend using HTML, CSS, and JavaScript.

# Functions of the Web Application.
1. Displaying Movie Listings: When the page loads, the application makes a GET request to the server to retrieve a list of movies. The movies are displayed as a menu on the left side of the page in an unordered list (<ul>) with the id films. Each movie is represented as a list item (<li>) with the classes film and item. When a movie is clicked in the menu, the details of that movie are displayed on the right side of the page.

2. Displaying Movie Details: The details of the first movie in the menu are displayed by default when the page loads. The movie details include its poster, title, runtime, showtime, and available tickets. The number of available tickets is calculated by subtracting the number of tickets_sold from the theater's capacity.

3. Buying Tickets: Users can click the "Buy Ticket" button to purchase a ticket for the displayed movie. After clicking the button, the number of available tickets is decreased on the frontend. If there are no available tickets (i.e., tickets_sold is equal to the theater's capacity), the "Buy Ticket" button is disabled.

# Getting Started.
To get started with the project, follow these steps:

1. Clone the repository: git clone <git@github.com:brighton-flemming/WK-3-Code-Challenge-FlatDango.git>
2. Open the project in a code editor of your choice.

# Using the application.
1. Open the index.html file in a web browser.
2. The movie menu will be displayed on the centre of the page.
3. Click on a movie in the menu to view its details just below the movie menu.
4. If tickets are available, click the "Buy Tickets" button to purchase them

# API Endpoints.
The application fetches movie data from the following API endpoints:

1. GET "http://localhost:3000/films"- Retrieves a list of movies.
2. GET http://localhost:3000/films/1 - Retrieves details of a specific movie.