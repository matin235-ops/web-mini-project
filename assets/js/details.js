document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalDescription = document.getElementById('modal-description');
    const modalGenre = document.getElementById('modal-genre');
    const modalReleaseDate = document.getElementById('modal-release-date');

    // Fetch movie data
    fetch('./assets/data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const movie = data.find(m => m.id === parseInt(movieId));
            if (movie) {
                // Populate movie details
                modalImage.src = movie.image;
                modalImage.alt = movie.title;
                modalTitle.textContent = movie.title;
                modalAuthor.textContent = `Directed by: ${movie.author}`;
                modalDescription.textContent = movie.description;
                modalGenre.textContent = movie.genre;
                modalReleaseDate.textContent = movie.releaseDate;
            } else {
                // Handle case where movie is not found
                document.getElementById('movie-details').innerHTML = '<p>Movie not found.</p>';
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('movie-details').innerHTML = '<p>Failed to load movie details. Please try again later.</p>';
        });
});