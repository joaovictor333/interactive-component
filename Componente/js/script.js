var number = document.querySelector("#number")
var rateNumber = document.querySelector('.number-out')
var submitBtn = document.querySelector(".submit")
var ratingState = document.querySelector(".container")
var thankyouState = document.querySelector(".outra-parte")

number.addEventListener("click", event=>{
    var numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected > 0 || numberSelected <= 5){
        submitBtn.addEventListener("click", ()=>{
            ratingState.style.display = "none";
            thankyouState.style.display = "flex";
        });
    }
});