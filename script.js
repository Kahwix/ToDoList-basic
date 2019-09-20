const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.getElementsByTagName('ul');
let returning = document.createTextNode(`[$returning]`);

function inputLength () {
    return input.value.length;
}