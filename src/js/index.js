/* Your JS here. */
console.log('Hello World!')
//reads id's for buttons
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let green = document.getElementById("green");
let reset = document.getElementById("reset");
//sets the target for the color change 
let target = document.getElementById("main");

//each one changes the background color of target
blue.addEventListener('click', function () {
    target.style.background = 'blue';
});
green.addEventListener('click', function () {
    target.style.background = 'green';
});
red.addEventListener('click', function () {
    target.style.background = 'red';
});
reset.addEventListener('click', function () {
    target.style.background = 'white';
});

//make div appear and disappear when the main body is clicked
let disappear = document.getElementById('hidden');
let change = document.getElementById('name');
let photo = document.getElementById('photo');

change.addEventListener('click', function (event) {
    disappear.style.display = "block";
    disappear.style.textAlign = 'center';
});
photo.addEventListener('click', function (event) {
    disappear.style.display = "none";

});

