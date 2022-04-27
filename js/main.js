{
    /* <div class="card">
        <div class="card__image">
            <img src="https://cdn.myanimelist.net/images/anime/13/39511l.webp" alt="Kingdom">
        </div>
        <div class="card__info">
            <h2 class="card__title">Kingdom</h2>
            <p class="card__genre">Martial Arts</p>
        </div>
    </div> */
}

function createCard(image, title, genre) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardImage = document.createElement('div');
    cardImage.classList.add('card__image');

    let cardImageImg = document.createElement('img');
    cardImageImg.src = image;
    cardImageImg.alt = title;

    cardImage.appendChild(cardImageImg);

    let cardInfo = document.createElement('div');
    cardInfo.classList.add('card__info');

    let cardGenre = document.createElement('p');
    cardGenre.classList.add('card__genre');
    cardGenre.innerText = genre;

    let cardTitle = document.createElement('h2');
    cardTitle.classList.add('card__title');
    cardTitle.innerText = title;

    cardInfo.appendChild(cardGenre);
    cardInfo.appendChild(cardTitle);

    card.appendChild(cardImage);
    card.appendChild(cardInfo);

    return card;
}


async function cardInit() {
    let boxCard = document.querySelector('.box__card');
    boxCard.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        let anime = await Anime.random();

        let image = anime.data.images.webp.large_image_url;
        let title = anime.data.title;
        let genre = Array.choice(anime.data.genres) ? Array.choice(anime.data.genres).name : 'Sem Gênero';

        card = createCard(image, title, genre);
        boxCard.appendChild(card);
    }
}


async function main() {
    Poster.init();
    cardInit();
}
main();
