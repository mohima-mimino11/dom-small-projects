const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove active class from other button
        btns.forEach(function(btn){
            btn.classList.remove("active")
            // add active class on the currently clicked button by the user
            e.target.classList.add("active")
        });
        // hide other articles without the one that user wants to see by clicking exact button
        articles.forEach(function(article){
            article.classList.remove("active")
        });
        const element = document.getElementById(id);
        element.classList.add("active")
        }
})