const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const minutes = now.getMinutes();
    const minDegree = ((minutes/60)*360)+90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


    // const now =  new Date();
    // const minutes = now.getMinutes();
    // const minDegree = (minutes/60)*360;

    // minHand.style.transform = `rotate(${minDegree}deg)`;



}

setInterval(setDate,1000)