// Access single divs
let containerArr = document.querySelectorAll('.info-container')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const container = document.querySelector('div')

// Initalize tooltip elements
const tooltip = document.createElement('div')
tooltip.setAttribute('class', 'tooltip')

const tooltiptext = document.createElement('span')
tooltiptext.setAttribute('class', 'tooltiptext')

// Put text into  box

function showTooltip(event) {

    // Necessary for 1st and 2nd solutions of addEventListener
    // if (event.target.id === 'one') {
    //     tooltiptext.textContent = 'Information tooltip text 1'
    // } else if (event.target.id === 'two') {
    //     tooltiptext.textContent = 'Information tooltip text 2'
    // } else if (event.target.id === 'three') {
    //     tooltiptext.textContent = 'Information tooltip text 3'
    // }

    document.body.appendChild(tooltip)
    tooltip.appendChild(tooltiptext)
    tooltip.style.position = 'absolute'
    tooltip.style.left = event.clientX + 'px';
    tooltip.style.top = event.clientY + 'px';
    }


function hideTooltip() {
    if (tooltip) {
        tooltip.remove()
    }    
}

// 3th way (works because container has 0 padding and margin)
container.addEventListener('mousemove', (event) => {
    let target = event.target
    switch (target.id) {
        case 'one':
            tooltiptext.textContent = 'Information tooltip text 1'
            break;
        case 'two':
            tooltiptext.textContent = 'Information tooltip text 2';
            break;
        case 'three':
            tooltiptext.textContent = 'Information tooltip text 3';
            break; 
    }
    showTooltip(event);
})

container.addEventListener('mouseleave', hideTooltip);

f
// 2nd way
// containerArr.forEach(element => {
//     element.addEventListener('mousemove', showTooltip);
// })

// containerArr.forEach(element => {
//     element.addEventListener('mouseleave', hideTooltip);
// })


// 1st way 
// one.addEventListener('mousemove', showTooltip);
// one.addEventListener('mouseleave', hideTooltip)

// two.addEventListener('mousemove', showTooltip);
// two.addEventListener('mouseleave', hideTooltip)

// three.addEventListener('mousemove', showTooltip);
// three.addEventListener('mouseleave', hideTooltip)


