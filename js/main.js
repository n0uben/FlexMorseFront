function traduire() {
    alert("letzongue la traduction !!!");
}

function initEvents() {
    /*Event traduction*/
    const tradForm = document.querySelector("form");
    tradForm.addEventListener("submit", (event) => {
        event.preventDefault();
        traduire();
    });

    /*Event switch langues*/
    const btnSwitchLanguage = document.querySelector("#switchLangues");
    btnSwitchLanguage.addEventListener("click", (event) => {
        event.preventDefault();
        switchLanguage();
    });
}

function switchLanguage() {
    alert("olalala faut changer les langages");
}

initEvents();