let body = document.querySelector("body");
let keyInput = document.querySelector("#key");
let valueInput = document.querySelector("#value");
let form = document.querySelector("form");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let deleteBtn = document.querySelector(".delete");
let minus = document.querySelector(".udalit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let keyValue = keyInput.value;
    let valueValue = valueInput.value;
    localStorage.setItem(keyValue, valueValue);
    h1.innerHTML = keyValue;
    h2.innerHTML = valueValue;
});

deleteBtn.addEventListener("click", () => {
    localStorage.clear();
    h1.innerHTML = "";
    h2.innerHTML = "";
});

function deletes() {
    let clear = prompt('Ochirmoqchi bolgan keyni kiriting');
    localStorage.removeItem(clear);
    h1.innerHTML = "";
    h2.innerHTML = "";
}

minus.addEventListener("click", deletes);