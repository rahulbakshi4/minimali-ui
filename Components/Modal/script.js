const openbtn = document.getElementById("open-modal");
const closebtn = document.getElementById("close-modal");
const modalContainer = document.querySelector(".modal-container");

openbtn.addEventListener(
    "click",
    () => (modalContainer.style.display = "flex")
);

closebtn.addEventListener(
    "click",
    () => (modalContainer.style.display = "none")
);
