const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);
let tempYear = new Date().getFullYear();
let tempMonth = new Date().getMonth();
let tempDay = new Date().getDate()
// let futureDate = new Date(2022,6,25,11,30,0);
// console.log(futureDate);
let futureDate = new Date(tempYear, tempMonth, tempDay+10, 11,30,0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months [month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on  ${weekday}  ${month} ${date} ${year} ${hours}:${minutes}am`;


// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
    const today = new  Date().getTime();
    const t = futureTime - today;
    // console.log(t);
    // 1 sec = 1000ms
    //1min = 60sec
    // 1hr= 60mins
    //1 day = 24hr
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    // calculate all values
    let days =  Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay)/ oneHour);
    let minutes = Math.floor((t % oneHour)/ oneMinute);
    let seconds = Math.floor((t%oneMinute)/ 1000);

    // set array of values
    let values = [days, hours, minutes,seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    })
    if(t<0){
        clearInterval(countdown);

        deadline.innerHTML = `<h4 class="expired">Sorry this giveaway is expired</h4>`;
    }

    

}
//countdown going code is below line
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
