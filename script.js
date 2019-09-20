const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.getElementsByTagName('ul');
let returning = document.createTextNode(input.value);


function inputLength () {
    return input.value.length;
}


    function CreatedElementPlayer () {
        const li = document.createElement('li');
        li.appendChild(returning);
        ul.appendChild(li);
	    input.value = "";
    }


    function DetectedMouse () {
        if ( inputLenght > 0 ){
            CreatedElementPlayer();
        }
    }


    function DetectedKeypress (ENTER) {
        if ( inputLength > 0 && ENTER.keyCode || ENTER.which === 13 ) {
            CreatedElementPlayer();
        }
    }


    button.addEventListener("click", DetectedMouse);
    input.addEventListener("keypress", DetectedKeypress);