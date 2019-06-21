
//inline event
// Function to modify the text content of the paragraph
/*
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an inline event handler.";
}
*/


//event handler
// Function to modify the text content of the paragraph
/*
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event handler property.";
}

// Add event handler as a property of the button element
const button = document.querySelector('button');
button.onclick = changeText;
*/


//eventlistner
// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event listener.";
}

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);








