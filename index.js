function reset(){
    totalAmt.value="";
    people.value="";
    displayTotalAmt.textContent="0.00";
    tipDisplay.textContent="0.00";
    customtip.value="";
}

var totalAmt = document.querySelector("#totalBilAmt");              //Total Bill Amount
var people = document.querySelector("#noOfPeople");

var displayTotalAmt = document.getElementById("totalAmtDisplay");

//Data
let billAmount;
let tipAmount = 0;
let noOfPeople = 1;


if (totalAmt != undefined || totalAmt != null)
    totalAmt.addEventListener('input', displayTotal);
// totalAmt.addEventListener('')
function displayTotal(e) {
    var num = parseFloat(e.target.value).toFixed(2);
    // if(noOfPeople != 0)
    num = num / noOfPeople;
    billAmount = isNaN(num) ? "0.00" : num
    displayTotalAmt.textContent = (billAmount).toFixed(2);
    tipAmount = (billAmount * tipAmount / 100) / noOfPeople;
    tipDisplay.textContent = isNaN(tipAmount) ? "0.00" : tipAmount.toFixed(2);
    // calculateTip(num);   
}

people.addEventListener('input', displayInd);

function displayInd(e) {
    noOfPeople = e.target.value;
    displayTotalAmt.textContent = isNaN(billAmount) ? "0.00" : (billAmount / noOfPeople).toFixed(2);
    tipDisplay.textContent = isNaN(tipAmount) ? "0.00" : tipAmount.toFixed(2);
}


//Tip Amount per Person
var tipDisplay = document.getElementById("tipAmt");
var tipBtn = document.querySelectorAll(".tipBtn");
var customtip = document.querySelector(".customTip");
for (i = 0; i < tipBtn.length; i++) {
    tipBtn[i].addEventListener('click', upadateTip);
}
customtip.addEventListener('input', upadateTip);

function upadateTip(e) {
    var tipAmount = parseFloat(e.target.value);
    tipAmount = (billAmount * tipAmount / 100) / noOfPeople;
    tipDisplay.textContent = isNaN(tipAmount) ? "0.00" : tipAmount.toFixed(2);
    displayTotalAmt.textContent = isNaN(billAmount) ? "0.00" : ((billAmount + tipAmount) / noOfPeople).toFixed(2);
}



