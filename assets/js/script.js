// This file contains the JavaScript code that fetches data from the JSON file and dynamically displays it on the web page.

document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const modal = document.getElementById('movie-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = document.querySelector('.close-btn');
    const genreFilter = document.getElementById('genre-filter');

    let movies = [];

    // Add a loading indicator
    const loadingIndicator = document.createElement('p');
    loadingIndicator.textContent = 'Loading data...';
    loadingIndicator.style.textAlign = 'center';
    dataContainer.appendChild(loadingIndicator);

    // Fetch and display movies
    fetch('./assets/data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Remove loading indicator
            dataContainer.removeChild(loadingIndicator);

            movies = data;
            displayMovies(movies);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            dataContainer.textContent = 'Failed to load data. Please try again later.';
        });

    // Display movies
    function displayMovies(movieList) {
        dataContainer.innerHTML = ''; // Clear existing movies
        movieList.forEach(movie => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            const imageElement = document.createElement('img');
            imageElement.src = movie.image;
            imageElement.alt = movie.title;

            const titleElement = document.createElement('h2');
            titleElement.textContent = movie.title;

            const linkElement = document.createElement('a');
            linkElement.href = `details.html?id=${movie.id}`;
            linkElement.textContent = 'View Details';
            linkElement.classList.add('details-link');

            itemElement.appendChild(imageElement);
            itemElement.appendChild(titleElement);
            itemElement.appendChild(linkElement);

            dataContainer.appendChild(itemElement);
        });
    }

    // Filter movies by genre
    genreFilter.addEventListener('change', () => {
        const selectedGenre = genreFilter.value;
        if (selectedGenre === 'all') {
            displayMovies(movies);
        } else {
            const filteredMovies = movies.filter(movie =>
                movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
            );
            displayMovies(filteredMovies);
        }
    });

    // Close modal on clicking the close button
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Add favicon link
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = 'favicon.ico';
faviconLink.type = 'image/x-icon';
document.head.appendChild(faviconLink);