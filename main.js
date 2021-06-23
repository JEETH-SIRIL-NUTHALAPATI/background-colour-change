let colors = ['red', 'blue', 'green', 'yellow', 'violet'];

let body = document.getElementById("body");

let button = document.getElementById("button");

button.addEventListener('click',function(){

    let randomColor = Math.floor(Math.random() * colors.length) ;

    body.style.background = colors[randomColor];

    button.style.background = colors[randomColor];
}
)