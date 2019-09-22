 `use strict`;

const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');
let li;


function CreatedTextNodeli() {
    li = document.createElement('li');
}

function CreatedElementLI() {
    li.append(document.createTextNode(input.value));
}

function InsertLiinUl() {
    ul.insertAdjacentElement('beforeend', li);
}


function DetectedMouse() {
    if ( input.value.length > 0 ){
        GeneralGestion();
    }
}

function DetectedKeypress(ENTER) {
    if ( input.value.length > 0 && (ENTER.keyCode === 13) ) {
        GeneralGestion();
    }
}


function GeneralGestion() {
    CreatedTextNodeli();
    CreatedElementLI();
    InsertLiinUl();
    input.value = "";
}

/*
function deleteLi() {
    let rm = document.getElementsByClassName("removebutton");
let li;
for ( let i = 0; i < rm.length; i++) {
    del[i].onclick = function () {
        li = this.parentElement;
        li.remove();
    }
}
}


function LocalStorageTextNodes (save) {
    localStorage.setItem('save', CreatedTextNodeli());
}
*/

button.addEventListener("click", DetectedMouse);
input.addEventListener("keypress", DetectedKeypress);