function traduire() {
    alert("letzongue la traduction !!!");
}

function initTraduction() {
    const tradForm = document.querySelector("form");
    tradForm.addEventListener("submit", (event) => {
        event.preventDefault();
        traduire();
    });
}

initTraduction();