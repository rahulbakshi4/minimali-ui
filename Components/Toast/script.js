const successBtn = document.querySelector(".outlined-success");
const successToast = document.querySelector(".toast-success");

const errorBtn = document.querySelector(".outlined-danger");
const errorToast = document.querySelector(".toast-error");

successBtn.addEventListener("click", () => {
    successToast.style.display = "block";
    setTimeout(() => {
        successToast.style.display = "none";
    }, 2000);
});

errorBtn.addEventListener("click", () => {
    errorToast.style.display = "block";
    setTimeout(() => {
        errorToast.style.display = "none";
    }, 2000);
});
