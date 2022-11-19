// Changing Outline Color:

const nameOutlineColor =  document.getElementById('shopName');
const addressOutlineColor =  document.getElementById('shopAddress');
const workingOutlineColor = document.getElementById('workingDays')
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

workingOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
    workingDays.value = window.localStorage.getItem("Working Days")
})

workingOutlineColor.addEventListener('blur', (event) => {
    event.target.style.outlineColor = '';
    window.localStorage.setItem("Working Days", event.target.value)
})

openingOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
    openingTime.value = window.localStorage.getItem("Opening time")
});

openingOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Opening time" , event.target.value)
});

closingOutlineColor.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
    closingTime.value = window.localStorage.getItem("Closing time")
});

closingOutlineColor.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Closing time" ,event.target.value)
});

// Fill the inputs:


function FillInputs(event){
    
}

// Button function:

const buttonPressed = document.getElementById('submitButton')

buttonPressed.addEventListener('click', (event) => {
    console.log("preparando envio...")
})