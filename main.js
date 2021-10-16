let calculateButton = document.getElementById("calculate");
let tipPercent;

window.onload = () => {
    let billAmount = document.getElementById('billAmount').value;
    let peopleNumber = document.getElementById('numberPeople').value;
    
    
    // if (document.getElementsByClassName("newCustomText").length != 0){
    //     tipPercent = document.getElementById('newCustomText').value / 100;
    // }

    if (billAmount === ''){
        billAmount = 0;
    }

    if(peopleNumber === ''){
        peopleNumber = 1;
    }
    
    if(tipPercent === undefined){
        tipPercent = 1;
    }

    let tipAmountDisplaySelector = document.getElementById("tipAmountDisplay");
    let totalDisplaySelector = document.getElementById("totalDisplay");
    
    let tipAmount = (parseFloat(billAmount) * parseFloat(tipPercent));
    let tipAmountDisplay = parseFloat((parseFloat(billAmount) * parseFloat(tipPercent)) / peopleNumber);
    let totalDisplay = parseFloat((parseFloat(billAmount) + parseFloat(tipAmount)) / peopleNumber); 
    
    totalDisplay = totalDisplaySelector.innerHTML = "$" + totalDisplay.toFixed(2);
    tipAmountDisplay = tipAmountDisplaySelector.innerHTML = "$" + tipAmountDisplay.toFixed(2);
};

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
        document.getElementById("custom").outerHTML = "<input type='number' id='newCustomText' min='0'class='newCustomText'>";

    console.log("custom");
    }
}


calculateButton.addEventListener('click', function(){
    let billAmount = document.getElementById('billAmount').value;
    let peopleNumber = document.getElementById('numberPeople').value;
    
    
    if (document.getElementsByClassName("newCustomText").length != 0){
        tipPercent = document.getElementById('newCustomText').value / 100;
    }

    if (billAmount === ''){
        billAmount = 0;
    }

    if(peopleNumber === ''){
        peopleNumber = 1;
    }
    
    if(tipPercent === undefined){
        tipPercent = 1;
    }

    let tipAmountDisplaySelector = document.getElementById("tipAmountDisplay");
    let totalDisplaySelector = document.getElementById("totalDisplay");
    
    let tipAmount = (parseFloat(billAmount) * parseFloat(tipPercent));
    let tipAmountDisplay = parseFloat((parseFloat(billAmount) * parseFloat(tipPercent)) / peopleNumber);
    let totalDisplay = parseFloat((parseFloat(billAmount) + parseFloat(tipAmount)) / peopleNumber); 
    
    totalDisplay = totalDisplaySelector.innerHTML = "$" + totalDisplay.toFixed(2);
    tipAmountDisplay = tipAmountDisplaySelector.innerHTML = "$" + tipAmountDisplay.toFixed(2);

    console.log(tipPercent);
    console.log(billAmount);
    console.log(peopleNumber);
    console.log(typeof(totalDisplay));
    console.log(totalDisplay);
    
})