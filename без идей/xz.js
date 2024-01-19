const confBox = document.querySelector('.conf');

function getRandom(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min) + min);
};

function randerConf() {
    const randCount = getRandom(50, 70);
    for (let i = 0; i < randCount; ++i) {
        confBox.innerHTML += `<div class="conf_${i}"></div>`
    };

    for (let x = 0; x < randCount; ++x) {
        document.querySelector(`.conf_${x}`).style.marginLeft = `${getRandom(0, window.innerWidth)}px`;
        document.querySelector(`.conf_${x}`).style.width = `${getRandom(3, 5)}px`;
        document.querySelector(`.conf_${x}`).style.height = `${getRandom(20, 25)}px`;
        document.querySelector(`.conf_${x}`).style.background = 'blue';
        // document.querySelector(`.conf_${x}`).style.
    };
};

randerConf();