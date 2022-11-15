function translateFile() {

    const blockTranslatedText = document.querySelector('#traductionDisplay');

    const inputLanguageValue = document.querySelector('#inputLanguage').innerHTML.trim().toLowerCase();
    const displayLanguageValue = document.querySelector('#displayLanguage').innerHTML.trim().toLowerCase();

    const UrlToFetch = `http://localhost:8080/traduction/${inputLanguageValue}/${displayLanguageValue}`;

    const file = document.querySelector('#fileToTranslate');
    if(file.files.length)
    {
        var reader = new FileReader();

        reader.onload = function(e)
        {
            console.log(e.target.result);
            const dataToSend = {
                texte: e.target.result
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
        };
        reader.readAsBinaryString(file.files[0]);
    }




}


function initEvents() {

    /*Event traduction*/
    const tradForm = document.querySelector("#submitFile");

    tradForm.addEventListener("click", (event) => {
        event.preventDefault();
        translateFile();
    });

    /*Event switch langues*/
    const btnSwitchLanguages = document.querySelector("#switchLanguages");
    btnSwitchLanguages.addEventListener("click", (event) => {
        event.preventDefault();
        switchLanguages();
    });
}

function switchLanguages() {
    const inputLanguage = document.querySelector('#inputLanguage');
    const displayLanguage = document.querySelector('#displayLanguage');


    const inputLanguageValue = inputLanguage.innerHTML;
    const displayLanguageValue = displayLanguage.innerHTML;

    inputLanguage.innerHTML = displayLanguageValue;
    displayLanguage.innerHTML = inputLanguageValue;
}

initEvents();