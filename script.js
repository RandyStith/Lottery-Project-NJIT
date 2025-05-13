const names = [];

const input = document.getElementById('input');
const form = document.querySelector('form');

const nameListContainer = document.createElement('div');
const randomButton = document.createElement('button');
const resultDisplay = document.createElement('p');

 randomButton.textContent = "Pick Random Name";
randomButton.style.marginTop = "20px";
randomButton.type = "button";

form.parentElement.appendChild(nameListContainer);
form.parentElement.appendChild(randomButton);
form.parentElement.appendChild(resultDisplay);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = input.value.trim();

    if(name !== '') {
        names.push(name);
        addNameToList(name);
        input.value = '';
    }
});

randomButton.addEventListener('click', function() {
    if(names.length === 0) {
        resultDisplay.textContent = "No names to choose from!";
    } else {
        const randomIndex = Math.floor(Math.random() * names.length);
        resultDisplay.textContent = "🎉 Lucky Name:"
    }
})
