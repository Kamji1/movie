
const api_key = '59f6f92d56a8c8493011ae17ca2e16aa';
const image = document.getElementById("image")

let main = document.getElementById('main');

async function fetchData() {
    try {
        // Fetch data from the API (replace with your actual API endpoint)
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        const data = await response.json()

        // const movieContainer = document.getElementById("movie");


        data.results.forEach(movie => {
            const newMovieContainer = document.createElement("div");
            newMovieContainer.className = "movie-content";
            const path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            // data - movie - id="${movie.id}"
            // const id = `${movie.id}`
            // newMovieContainer.id = `${id}`
            newMovieContainer.innerHTML = `
                <div id="movie" class="movieBox">
                    <div id="image" class="movie-img" >
                        <div id="${movie.id}" class="img">
                            <img src="${path}" />
                        </div>
                        <div class="inner_img">
                            <div class="series_div">
                                <div class="series">
                                    TV SERIES</div>
                            </div>
                            <div class="emoji_con">
                                <div class="hrt_con"> </div>
                                <div class="hrt_div">
                                    <div class="hrt"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 20 20" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                                                fill="#D1D5DB" />
                                        </svg></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="usa_div">Date: ${movie.release_date}</div>
                    <div id="name" class="Stranger_div">${movie.title}</div>
                    <div class="imdb_con">
                        <div class="sticker_div">
                            <img style="width: 35px; height: 17px" src="imob.png" />
                            <div class="sticker_txt"> 86.0 / 100</div>
                        </div>
                        <div class="sticker_div">
                            <img style="width: 16px; height: 17px" src="ping.png" />
                            <div class="sticker_txt">
                                97%</div>
                        </div>
                    </div>
                    <div class="writeUp">
                        Action, Adventure, Horror
                    </div>
                        
                </div>        `

            main.appendChild(newMovieContainer);

            newMovieContainer.addEventListener("click", () => {

                const imageElement = newMovieContainer.querySelector(".img");
                const movieId = imageElement.getAttribute("id");
                window.location.href = `detailed.html?id=${movieId}`;;
            });
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



// Call the function when the page loads or as needed
fetchData();


