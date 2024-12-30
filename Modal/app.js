// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const toggleBtn = document.querySelector(".modal-btn");
const overlayModal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function(){
    // console.log(toggleBtn.classList);
    overlayModal.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function(){
    // console.log(closeBtn.classList);
    overlayModal.classList.remove("open-modal");
});