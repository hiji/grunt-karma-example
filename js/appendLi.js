function appendLi() {
    const ul = document.getElementById("ul");
    const newLi = document.createElement("li");
    newLi.innerText = "Hello!";
    ul.appendChild(newLi);
}