// здесь основные карточки
let catalog = document.querySelector(`.plastinki-catalog`)
// массив пластинок
let vinylRecs = [
    {
        img: `0.jpg`,
        name: `AC/DC. Power Up (2020)`,
        price: 3480,
        description: `Power Up (сокращённо PWR/UP и стилизовано как PWRϟUP) — семнадцатый студийный альбом австралийской рок-группы AC/DC, выпущенный 13 ноября 2020 года на лейблах Columbia Records и Sony Music Australia. Power Up знаменует возвращение вокалиста Брайана Джонсона, барабанщика Фила Радда и бас-гитариста Клиффа Уильямса, которые прежде оставили AC/DC до, во время, и после сопровождающегося тура в поддержку предыдущего альбома Rock or Bust (2014).`
    },
    {
        img: `1.jpg`,
        name: `The Killers. Hot Fuss (2004)`,
        price: 2570,
        description: `Hot Fuss — дебютный альбом американской альтернативной рок-группы The Killers, вышедший в июне 2004 года.`
    },
    {
        img: `2.jpg`,
        name: `Joji. SMITHEREENS (2022)`,
        price: 4990,
        description: `Smithereens is the third studio album by Japanese singer-songwriter Joji, released on 4 November 2022 via 88rising and Warner Records. It was preceded by the singles "Glimpse of Us" and "Yukon (Interlude)". Joji is touring North America in promotion of the record from September 2022.`
    },
    {
        img: `3.png`,
        name: `Joji. Ballads (2020)`,
        price: 7820,
        description: `BALLADS 1 — дебютный студийный альбом японского певца-композитора Джорджа Миллера под псевдонимом Joji, и второй студийный альбом после Pink Season вышедший под псевдонимом Pink Guy. Вышел 26 октября 2018 года под лейблами 88rising и 12Tone Music. Альбом дебютировал под третьим номером в чарте Billboard 200, а также занял первое место в Top R&B/Hip-Hop Albums.`
    },
    {
        img: `4.jfif`,
        name: `The Weekend. Starboy (2018)`,
        price: 3330,
        description: `Starboy — третий студийный альбом канадского певца The Weeknd. Его выход состоялся 25 ноября 2016 года; выпускающие лейблы — XO и Republic Records. На записи в качестве гостей появляются: Daft Punk, Лана Дель Рей, Фьючер и Кендрик Ламар. Лид-синглом является одноимённая песня, выпущенная 22 сентября 2016 года.`
    },
    {
        img: `5.jpg`,
        name: `Lana Del Rey. Born To Die (2012)`,
        price: 3700,
        description: `Born to Die (с англ. — «Рождённые умереть») — второй студийный альбом американской певицы Ланы Дель Рей, выпущенный 27 января 2012 года на лейблах Interscope, Polydor и Stranger Records. `
    },
    {
        img: `6.jpg`,
        name: `Lana Del Rey. Ultraviolence (2014)`,
        price: 2745,
        description: `Ultraviolence (с англ. — «Ультранасилие») — третий студийный альбом американской певицы и автора песен Ланы Дель Рей, изданный 13 июня 2014 года на лейблах Interscope и Polydor. После выхода в 2012 году Born to Die Лана не планировала выпускать новую музыку. Однако к ноябрю 2013 года она собрала материал и приступила к записи новой пластинки.`
    },
    {
        img: `7.jpg`,
        name: `Вокруг Фонарного Столба. Видеоигры (2019)`,
        price: 6890,
        description: `От поп-панкового звучания их дебютной ЕР «С городом наедине» 2017 года в первом альбоме группы «Видеоигры», вышедшем в 2019 году, не осталось вообще ничего — разве что общее меланхоличное настроение. Самый лучший альбом на планете. I SWEAR`
    },
    {
        img: `8.jfif`,
        name: `Панкмодернисты. Теория М (2021)`,
        price: 2000,
        description: `Белорусская группа из самого центра дворов Полоцка/Питера (нужное подчеркнуть)`
    }
];
// вывод пластинок на страницу
for (let i = 0; i < vinylRecs.length; i++){
    catalog.innerHTML += `
                <div class="vinyl-card vinyl-card-main">
                    <img src="assets/vinylrecords/${vinylRecs[i].img}" alt="Виниловая пластинка">
                    <p> ${vinylRecs[i].name} </p>
                    <h3 class="vinyl-cost"> ${vinylRecs[i].price} руб. </h3>
                </div>
                <div class="modalwin d-none">
                    <div class="card-modal">
                        <h2> Вы выбрали: </h2>
                        <div class="vinyl-card">
                            <img src="assets/vinylrecords/${vinylRecs[i].img}" alt="Виниловая пластинка">
                            <p> ${vinylRecs[i].name} </p>
                            <h3 class="vinyl-cost"> ${vinylRecs[i].price} руб. </h3>
                        </div>
                        <div class="vinyl-description">
                            <h3> Описание альбома: </h3>
                            ${vinylRecs[i].description}
                            <div class="buttons-modal">
                                <button class="enter-button2 add-to"> Добавить в корзину </button>
                                <button class="enter-button2 exit"> Выйти </button>
                            </div>
                        </div>
                    </div>
                </div>`
}

let cards = document.querySelectorAll (`.vinyl-card-main`);
let modalwindows = document.querySelectorAll(`.modalwin`);
// обработчик события "клик" по карточке
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener(`click`, function(){
        modalwindows[i].classList.remove(`d-none`);
    })
};


let trashContainer = document.querySelector(`.trash-container`);
let cartWindow = document.querySelector(`.cart-window`);
let summ = document.querySelector(`.summ`);
let summNum = 0;
let btnsAdd = document.querySelectorAll (`.add-to`);
let btnsExit = document.querySelectorAll (`.exit`);
let cardsInCart = [];
summ.innerHTML = `Итого: ${summNum} руб.`

// добавление в корзину
for (let i = 0; i < btnsAdd.length; i++){
    btnsAdd[i].addEventListener(`click`, function(){
        let itogo = document.querySelector(`.summ`);
        itogo.innerHTML = ``;
        summNum += vinylRecs[i].price;
        itogo.innerHTML = `Итого: ${summNum} руб.`;
        cartWindow.innerHTML += `
        <div class="vinyl-card vinyl-card-cart">
            <img src="assets/vinylrecords/${vinylRecs[i].img}" alt="Виниловая пластинка">
            <p> ${vinylRecs[i].name} </p>
            <h3 class="vinyl-cost"> ${vinylRecs[i].price} руб. </h3>
        </div>`;
        cardsInCart.push(vinylRecs[i]);
        summNum = 0;
        for (let j = 0; j < cardsInCart.length; j++) {
            summNum += cardsInCart[j].price;
        };
        console.log(cardsInCart);
        modalwindows[i].classList.add(`d-none`);
    });
};
// кнопки выхода в модальных окнах
for (let i = 0; i < btnsExit.length; i++){
    btnsExit[i].addEventListener(`click`, function(){
        modalwindows[i].classList.add(`d-none`);
    });
};

// просто кнопочка открытия корзины
let cartBtn = document.querySelector(`.a-cart`);
cartBtn.addEventListener(`click`, function (){
    trashContainer.classList.toggle(`hidden`);
});
cartBtn.addEventListener(`mouseover`, function (){
    trashContainer.classList.remove(`hidden`);
});

let searchInput = document.querySelector(`#search`);
let searchCards = [];

// поиск по каталогу
searchInput.addEventListener(`input`, function(){
    catalog.innerHTML = ``;
    searchCards =  [];
    // вывод поиска на экран в catalog
    for (let i = 0; i < vinylRecs.length; i++){
        if (vinylRecs[i].name.includes(searchInput.value)) {
            searchCards.push(vinylRecs[i]);
            catalog.innerHTML += `
                <div class="vinyl-card vinyl-card-main">
                    <img src="assets/vinylrecords/${vinylRecs[i].img}" alt="Виниловая пластинка">
                    <p> ${vinylRecs[i].name} </p>
                    <h3 class="vinyl-cost"> ${vinylRecs[i].price} руб. </h3>
                </div>
                <div class="modalwin d-none">
                    <div class="card-modal">
                        <h2> Вы выбрали: </h2>
                        <div class="vinyl-card">
                            <img src="assets/vinylrecords/${vinylRecs[i].img}" alt="Виниловая пластинка">
                            <p> ${vinylRecs[i].name} </p>
                            <h3 class="vinyl-cost"> ${vinylRecs[i].price} руб. </h3>
                        </div>
                        <div class="vinyl-description">
                            <h3> Описание альбома: </h3>
                            ${vinylRecs[i].description}
                            <div class="buttons-modal">
                                <button class="enter-button2 add-to"> Добавить в корзину </button>
                                <button class="enter-button2 exit"> Выйти </button>
                            </div>
                        </div>
                    </div>
                </div>`
        };
    };
    cards = document.querySelectorAll (`.vinyl-card-main`);
    modalwindows = document.querySelectorAll(`.modalwin`);
    // обработчик события "клик" по карточке
    for (let i = 0; i < cards.length; i++){
        cards[i].addEventListener(`click`, function(){
        modalwindows[i].classList.remove(`d-none`);
        });
    };
    // здесь были жесткие попытки добавлять элементы из поиска в корзину
    btnsAdd = [];
    btnsAdd = document.querySelectorAll (`.add-to`);
    for (let i = 0; i < btnsAdd.length; i++){
        btnsAdd[i].addEventListener(`click`, function(){
            let itogo = document.querySelector(`.summ`);
            itogo.innerHTML = ``;
            summNum += searchCards[i].price;
            itogo.innerHTML = `Итого: ${summNum} руб.`;
            cartWindow.innerHTML += `
            <div class="vinyl-card vinyl-card-cart">
                <img src="assets/vinylrecords/${searchCards[i].img}" alt="Виниловая пластинка">
                <p> ${searchCards[i].name} </p>
                <h3 class="vinyl-cost"> ${searchCards[i].price} руб. </h3>
            </div>`;
            modalwindows[i].classList.add(`d-none`);
        });
    };   
    btnsExit = document.querySelectorAll (`.exit`);
    for (let i = 0; i < btnsExit.length; i++){
        btnsExit[i].addEventListener(`click`, function(){
            modalwindows[i].classList.add(`d-none`);
        });
    };
});

// ААААААААААААААА я смогла сделать эту дурацкую сумму ура