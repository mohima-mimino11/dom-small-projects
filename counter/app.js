// set counter value
let count = 0;

const container = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
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
            container.style.color = "red";
        }
        if(count > 0){
            container.style.color = "green";
        }
        if(count === 0){
            container.style.color = "#222";
        }
        container.textContent = count;
    });
});