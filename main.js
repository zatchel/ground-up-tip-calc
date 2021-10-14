let calculateButton = document.getElementById("calculate");
let tipPercent;

function makeTipFive(){
    tipPercent = .05;
}

function makeTipTen(){
    tipPercent = .10;
}

function makeTipFifteen(){
    tipPercent = .15;
}

function makeTipTwenty(){
    tipPercent = .20;
}

// function makeTipCustom(){
//     tipPercent = 
// }

function becomeActive(){
    let boxExists = document.getElementsByClassName("newCustomText").length;
    if(boxExists === 0){
        document.getElementById("custom").outerHTML = "<input type='text' id='newCustomText' class='newCustomText'>";

    console.log("custom");
    }
}


calculateButton.addEventListener('click', function(){
    let billAmount = document.getElementById('billAmount').value;
    let peopleNumber = document.getElementById('numberPeople').value;
    
    
    if (document.getElementsByClassName("newCustomText").length != 0){
        tipPercent = document.getElementById('newCustomText').value / 100;
    }


    
    let tipAmountDisplaySelector = document.getElementById("tipAmountDisplay");
    let totalDisplaySelector = document.getElementById("totalDisplay");
    
    let tipAmount = (parseFloat(billAmount) * parseFloat(tipPercent));
    let tipAmountDisplay = tipAmountDisplaySelector.innerHTML = (parseFloat(billAmount) * parseFloat(tipPercent)) / peopleNumber;
    let totalDisplay = totalDisplaySelector.innerHTML = (parseFloat(billAmount) + parseFloat(tipAmount)) / peopleNumber; 
    
    
    console.log(tipPercent);
    console.log(billAmount);
    console.log(peopleNumber);
    
})