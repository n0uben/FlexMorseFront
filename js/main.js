function traduire(event) {
    const textToTranslate = event.target[0].value;

    const inputLanguageValue = document.querySelector('#inputLanguage').innerHTML.toLowerCase();
    const displayLanguageValue = document.querySelector('#displayLanguage').innerHTML.toLowerCase();

    const UrlToFetch = `http://localhost:8080/traduction/${inputLanguageValue}/${displayLanguageValue}`;
    const dataToSend = {
        texteTraduit: textToTranslate
    } 

    fetch(UrlToFetch, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',

        body: JSON.stringify(dataToSend)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

function initEvents() {
    /*Event traduction*/
    const tradForm = document.querySelector("form");

    tradForm.addEventListener("submit", (event) => {
        event.preventDefault();
        traduire(event);
    });

    /*Event switch langues*/
    const btnSwitchLanguages = document.querySelector("#switchLanguages");
    btnSwitchLanguages.addEventListener("click", (event) => {
        event.preventDefault();
        switchLanguages();
    });
}

function switchLanguages(event) {
    const inputLanguage = document.querySelector('#inputLanguage');
    const displayLanguage = document.querySelector('#displayLanguage');

    const inputLanguageValue = inputLanguage.innerHTML;
    const displayLanguageValue = displayLanguage.innerHTML;

    inputLanguage.innerHTML = displayLanguageValue;
    displayLanguage.innerHTML = inputLanguageValue;
}

initEvents();