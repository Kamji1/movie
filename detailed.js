document.addEventListener('DOMContentLoaded', function () {
    // Get the movieId from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    // Check if movieId is not null

    const api_Key = '59f6f92d56a8c8493011ae17ca2e16aa';
    const movieDiv = document.getElementById('movieDetails');
    const crews = document.getElementById('crew')
    const title = document.getElementById('title')
    const desc = document.getElementById('descript')

    // Include the 'credits' information in the API request
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_Key}`)
        .then(response => response.json())
        .then(data => {
            const movieImage = document.createElement('img');
            movieImage.src = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
            movieImage.classList.add('movie-image');

            // Extract credits information
            // const credits = data.credits;
            // const cast = credits.cast.slice(0, 2);
            const backdrop_path = data.backdrop_path;

            // const stars = cast.filter(member => member.known_for_department === 'Acting');

            // Display movie details
            const movieContent = `
                <img src ="https://image.tmdb.org/t/p/w500${backdrop_path}?api_key=${api_Key}" class="image"></img>
               `;

            // Set the HTML content of the target div
            movieDiv.innerHTML = movieContent;

            title.innerHTML = `<h1> ${data.title}</h1>`
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // Fetch crew information separately
    // Fetch movie details first
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_Key}`)
        .then(response => response.json())
        .then(movieData => {
            // Use movieData to get movie description
            const description = movieData.overview;
            console.log('Movie Description:', description);

            // Display movie description
            desc.innerHTML = `<p>Description: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
        });

    // Fetch movie credits
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_Key}`)
        .then(response => response.json())
        .then(creditsData => {
            // Use creditsData to get crew information
            const crew = creditsData.crew;

            // Filter crew members based on job
            const producers = crew.filter(member => member.job === 'Producer');
            const directors = crew.filter(member => member.job === 'Director');
            const writers = crew.filter(member => member.job === 'Writer');

            console.log('Producers:', producers);
            console.log('Directors:', directors);
            console.log('Writers:', writers);

            // Display crew information
            crews.innerHTML = `
            <div class="crewDetails">
                <p>Producers: ${producers.map(member => member.name).join(', ')}</p>
                <p>Directors: ${directors.map(member => member.name).join(', ')}</p>
                <p>Writers: ${writers.map(member => member.name).join(', ')}</p>
            </div>`;
        })
        .catch(error => {
            console.error('Error fetching credits data:', error);
        });


});






