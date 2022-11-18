// Changing Outline Color:

const nameOutlineColor =  document.getElementById('shopName');
const addressOutlineColor =  document.getElementById('shopAddress');
const openingOutlineColor = document.getElementById('openingTime')
const closingOutlineColor = document.getElementById('closingTime')

nameOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

nameOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    console.log("Shop name: " +event.target.value)
});

addressOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

addressOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    console.log("Shop address: " +event.target.value)
});

openingOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

openingOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    console.log("Opéning time:" +event.target.value)
});

closingOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

closingOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    console.log("Closing time:" +event.target.value)
});

// Button function:

const buttonPressed = document.getElementById('submitButton')

buttonPressed.addEventListener('click', (event) => {
    console.log("preparando envio...")
})