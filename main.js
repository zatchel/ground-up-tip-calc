// const billAmount = document.querySelector(["data-billAmount"]);
const tipFive = document.querySelector(["data-tipFive"]);
const tipTen = document.querySelector(["data-tipTen "]);
const tipFifteen = document.querySelector(["tipFifteen"]);
const tipTwenty  = document.querySelector(["tipTwenty "]);
const tipCustom = document.querySelector(["data-tipCustom"]);
const numberPeople = document.querySelector(["data-numberPeople"]);
const calculateButton = document.getElementById("calculate");
const tipAmountDisplay = document.querySelector(["data-tipAmountDisplay"]);
const totalDisplay = document.querySelector(["data-totalDisplay"]);
const selectDrop = document.getElementById("selectDrop");


calculateButton.addEventListener('click', function(){
    let billAmount = document.getElementById('billAmount').value;
    let peopleNumber = document.getElementById('numberPeople').value;
    
    
    console.log(billAmount);
    console.log(peopleNumber);
})

function becomeActive(){
    let boxExists = document.getElementsByClassName("newCustomText").length;
    if(boxExists === 0){
        document.getElementById("custom").outerHTML = "<input type='text' class='newCustomText' placeholder='%'>";

    console.log("custom");
    }
}
