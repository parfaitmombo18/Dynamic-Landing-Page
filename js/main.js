// DOM Elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime(){
    let today = new Date();
    let hour = today.getHours(); //getHours gives a number between 0 -23
    let min = today.getMinutes();
    let sec = today.getSeconds();


    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output the time 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n){
    return n < 10 ? (`0${n}`) : n;
}

// Set Background and greeting
function setBgGreet(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('https://res.cloudinary.com/dtjqtumhc/image/upload/v1602843440/landing_page/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('https://res.cloudinary.com/dtjqtumhc/image/upload/v1602843443/landing_page/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else {
        // Evening
        document.body.style.backgroundImage = "url('https://res.cloudinary.com/dtjqtumhc/image/upload/v1602843444/landing_page/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = '#f5f6f3'
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if (e.which === 13 || e.keyCode === 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    }else {
        localStorage.setItem('name', e.target.innerText);
    }

}

// Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if (e.which === 13 || e.keyCode === 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    }else {
        localStorage.setItem('focus', e.target.innerText);
    }

}


name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)



// Run
showTime();
setBgGreet();
getName();
getFocus();