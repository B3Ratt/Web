// API'den filmleri almak için URL ve seçenekler
const apiUrl = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/';
const apiKey = '3d089651cemsh880a36d92d9b543p1bb5e9jsn2334cb2a1bc9';

// Arama yapılacak film adı
const searchQuery = 'The Godfather'; // Örnek bir film adı

// API'den filmleri al ve göster
fetch(apiUrl + encodeURIComponent(searchQuery), {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    const movies = data.results;
    const movieCards = movies.map(movie => {
        return `<li><img src="${movie.primaryImage?.url || 'https://via.placeholder.com/150'}" alt="${movie.titleText?.text || 'No title'}"><h3>${movie.titleText?.text || 'No title'}</h3><p>${movie.releaseYear?.year || 'Unknown'}</p></li>`;
    }).join('');
    document.querySelector('.movies').innerHTML = movieCards;
})
.catch(error => console.error('Error fetching data:', error));
