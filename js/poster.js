Poster = {
    create({
        image,
        title,
        genre
    }) {
        let poster = document.createElement('article');
        poster.classList.add('poster');

        let posterImage = document.createElement('div');
        posterImage.classList.add('poster__image');

        let posterImageImg = document.createElement('img');
        posterImageImg.src = image;
        posterImageImg.alt = title;

        posterImage.appendChild(posterImageImg);

        let posterInfo = document.createElement('div');
        posterInfo.classList.add('poster__info');

        let posterGenre = document.createElement('p');
        posterGenre.classList.add('poster__genre');
        posterGenre.innerText = genre;

        let posterTitle = document.createElement('h1');
        posterTitle.classList.add('poster__title');
        posterTitle.innerText = title;

        posterInfo.appendChild(posterGenre);
        posterInfo.appendChild(posterTitle);

        poster.appendChild(posterImage);
        poster.appendChild(posterInfo);

        return poster;
    },

    async init() {
        let anime = await Anime.random();

        let image = anime.data.images.webp.large_image_url;
        let title = anime.data.title;
        let genre = Array.choice(anime.data.genres) ? Array.choice(anime.data.genres).name : 'Sem Gênero';

        poster = Poster.create({
            image,
            title,
            genre
        });

        let boxPoster = document.querySelector('.box__poster');
        boxPoster.innerHTML = '';
        boxPoster.appendChild(poster);
    }
}
