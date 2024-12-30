//classList- shows all the  child classes a specific class have
// contains- is a method checks if a type of class is in the list or not
// add-  a method for adding  a class
// remove-  a method for removing  a class
// toggle-  a functionality for enabling toggle feature

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }
    // else{
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links');

});


