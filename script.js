// Changing Outline Color:

const nameOutlineColor =  document.getElementById('shopName');
const addressOutlineColor =  document.getElementById('shopAddress');
const openingOutlineColor = document.getElementById('openingTime')
const closingOutlineColor = document.getElementById('closingTime')

nameOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
    shopName.value = window.localStorage.getItem('Shop Name')
});

nameOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Shop Name" , event.target.value)
});

addressOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
    shopAddress.value = window.localStorage.getItem("Shop Address")
});

addressOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Shop Address" , event.target.value)
});

openingOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

openingOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Opening time:" , event.target.value)
});

closingOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

closingOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Closing time:" ,event.target.value)
});

// Fill the inputs:


function FillInputs(event){
    
}

// Button function:

const buttonPressed = document.getElementById('submitButton')

buttonPressed.addEventListener('click', (event) => {
    console.log("preparando envio...")
})