Array.choice = (choices) => {
    if (choices.length == undefined || choices.length == null || choices.length == 0) {
        return null;
    }
    if (choices.length == 1) {
        return choices[0];
    }

    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

Anime = {
    random: async () => {
        let data = await (await fetch('https://api.jikan.moe/v4/random/anime')).json();

        return data;
    }
}
