function traduire() {
    const textToTranslate = document.querySelector("#traductionInput").value;
    const blockTranslatedText = document.querySelector('#traductionDisplay');

    const inputLanguageValue = document.querySelector('#inputLanguage').innerHTML.trim().toLowerCase();
    const displayLanguageValue = document.querySelector('#displayLanguage').innerHTML.trim().toLowerCase();

    const UrlToFetch = `http://localhost:8080/traduction/${inputLanguageValue}/${displayLanguageValue}`;
    const dataToSend = {
        texte: textToTranslate
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
        .then(data => {
            blockTranslatedText.innerHTML = data.texte;
            console.log(data);
        })
        .catch(error => console.error(error));
}

function initEvents() {
    /*Event traduction*/
    const tradForm = document.querySelector("textarea");

    tradForm.addEventListener("keyup", (event) => {
        event.preventDefault();
        traduire();
    });

    // tradForm.addEventListener("submit", (event) => {
    //     event.preventDefault();
    //     console.log("coucou");
    //     traduire();
    // });

    /*Event switch langues*/
    const btnSwitchLanguages = document.querySelector("#switchLanguages");
    btnSwitchLanguages.addEventListener("click", (event) => {
        event.preventDefault();
        switchLanguages();
    });
}

function switchLanguages(event) {
    // noms langages
    const inputLanguage = document.querySelector('#inputLanguage');
    const displayLanguage = document.querySelector('#displayLanguage');

    //textarea et display trad
    const traductionInput = document.querySelector("#traductionInput");
    const traductionDisplay = document.querySelector("#traductionDisplay")

    //les values des elements ci-dessus
    const inputLanguageValue = inputLanguage.innerHTML;
    const displayLanguageValue = displayLanguage.innerHTML;

    const traductionInputValue = traductionInput.value;
    const traductionDisplayValue = traductionDisplay.innerHTML;

    //on inverse tout
    inputLanguage.innerHTML = displayLanguageValue;
    displayLanguage.innerHTML = inputLanguageValue;

    traductionInput.value = traductionDisplayValue;
    traductionDisplay.innerHTML = traductionInputValue;
}

initEvents();