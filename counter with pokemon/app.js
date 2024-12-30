// set counter value
let count = 0;
// array created for some definite color
const colors = ["red", "green", "rgba(0, 0, 255)", "#FFB60A"];
// array created for random hex color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const img = [{img: "./images/balbasaur.jpg"},
{img: "./images/charmander.jpg"},
{img: "./images/squirtle.jpg"}];

const container = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
const color = document.querySelector('.color');


console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        const simRandomNumber = getRandomNumber1();
        const hexRandomNumber = getRandomNumber2();

        let hexColor = "#";
        for(let i=0; i<6; i++){   // for loop used for generating random hex color from it's function [limit is 6 cause hex color code always have 6 numbers]
            hexColor += hex[getRandomNumber2()]
        }


        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        if(count < 0){
            // if counter value is less than 0 then it will give you color from the definite color arrays
            container.style.color = "#222";

            document.body.style.backgroundColor = colors[simRandomNumber];
            color.textContent = colors[simRandomNumber]
            
            
        }
        if(count > 0){
            // if counter value is greater than 0 then it will give you color from the hex color arrays
            
            container.style.color = "#222";

            document.body.style.backgroundColor = hexColor;
            color.textContent = hexColor;
        //     return `  <div class="pokemon">
        // <img src="./images/charmander.jpg" />
        
        // </div>`

            

        }
        if(count === 0){
            container.style.color = "#222";
            document.body.style.backgroundColor = "#F1f5f8";
            color.textContent = "#F1f5f8";
            // document.body.style.backgroundImage = "images/balbasaur.jpg";

          

            


        }
        container.textContent = count;
        

    });
});

function getRandomNumber1(){
    return Math.floor(Math.random()* colors.length);
}

function getRandomNumber2(){
    return Math.floor(Math.random()* hex.length);
    
}
// function getRandomNumber3(){
//     return Math.floor(Math.random()* img.length);

// }
// function displayMenuItems(img){
//     let displayMenu = img.map(function(item){
//         // console.log(item);
//         return `  <div class="pokemon">
//         <img src="${item.img}" />
        
//         </div>`
//     })
//     // console.log(displayMenu);
//     displayMenu = displayMenu.join("");
//     sectionCenter.innerHTML = displayMenu;
// }