const redParagraph = document.createElement("p")
const div = document.querySelector('div#div')

document.body.style.cssText = 'margin: 0; padding: 0; width: 100vw; height: 100vh'
redParagraph.style.color = 'red'
redParagraph.textContent = 'Hello this is a red text'

redParagraph.classList.add('red-text')
div.innerHTML = '<a>This is an innerHTML text</a>'

div.appendChild(redParagraph)

// 
const blueH3 = document.createElement('h3')
blueH3.textContent = 'Hi i am blue h3'
blueH3.style['color'] = 'blue'
div.appendChild(blueH3);

//

const newDiv = document.createElement('div')
newDiv.style.cssText = 'background-color: pink; border: 1px solid black; padding: 1em'
div.appendChild(newDiv);

// add inside newDiv

const frag = document.createDocumentFragment(); 

const newDivH1 = document.createElement('h1')
newDivH1.setAttribute('style', 'font-size: 3em')
newDivH1.textContent = 'I am a h1 inside newDiv'

const newDivP = document.createElement('p')
newDivP.style.setProperty('color', 'blue')
newDivP.textContent = 'me too'

// newDiv.append(newDivH1, newDivP)
// OR 
frag.appendChild(newDivH1)
frag.appendChild(newDivP)

newDiv.appendChild(frag)

// button

const btn = document.querySelector("#button")
// btn.onclick = () => (alert('Hello World'))
// btn.addEventListener('click', () => {
//     alert("Hello world")
// })
 
//btn.onclick = greet
// btn.addEventListener("click", greet)

// add <a> tag with link
const link = document.createElement("a")
link.textContent = 'This is a link you can click'
link.setAttribute('href', 'http://ardatas.com');
link.setAttribute('id', 'link')
link.setAttribute('target', '_blank')

div.appendChild(link);

// functions 
function greet() {
    alert("hello world")
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// event listeners

btn.addEventListener('click', function(event) {
    event.target.style.background = `rgb(${random(256)} ${random(256)} ${random(256)}`;
});

link.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    div.style.backgroundColor = 'lightBlue';
})

// document.getElementById('div').addEventListener('click', function(event) {
//     event.target.style.backgroundColor = 'blue';
//     blueH3.style['backgroundColor'] = 'green'

// })

// document.body.addEventListener('click', function(event) {
//     blueH3.style['backgroundColor'] = 'green'
// } );

// mousemove function 


function createDot(x, y) {

    const dot = document.createElement('div');

    document.body.appendChild(dot)
    dot.style.cssText = 'width: 0px; height: 0px';

    // circle
    // dot.style.borderRadius = '50%'
    // adjust corresponding width and height for circle above // 
    // dot.style.backgroundColor = `rgb(${random(256)} ${random(256)} ${random(256)}`;

    //triangle
    dot.style.borderLeft = '10px solid transparent'
    dot.style.borderRight = '10px solid transparent'
    dot.style.borderBottom = `20px solid rgb(${random(256)} ${random(256)} ${random(256)}`
    
    dot.style.position = 'absolute'
    dot.style.left = x + 'px'
    dot.style.top = y + 'px' 
    dot.style.pointerEvents = 'none'


    setTimeout(() => {
        dot.remove();
    }, 1000);
}

document.body.addEventListener('mousemove', function (event) {
    createDot(event.clientX, event.clientY)
})

