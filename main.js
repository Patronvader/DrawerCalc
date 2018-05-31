var calcNum = function (event) {
   var elementName = event.currentTarget.id,
   dispId = elementName+"disp",
   userInput = document.getElementById(elementName).value,
   dispNum = document.getElementById(dispId);
   if (userInput >= 0) {
    dispNum.innerHTML = (elementName * userInput).toFixed()
   }
};

var dispNum = function () {
    var dispNums = document.getElementsByClassName("num");
    var totalNum = document.getElementById("totalNumber");
    totNums = 0;
    var newNums = 0;

    Array.from(dispNums).forEach( function(el) {
        var newNums = el.innerHTML
        totNums += parseInt(newNums)
        totalNum.innerHTML = totNums
        }
    );
};

var finalNumber = function () {
    var displayedNum = document.getElementById("dropAmount");
    var preDrop = document.getElementById("totalNumber");
    var displayedNumb = parseInt(preDrop.innerHTML) - 300;
    displayedNum.innerHTML = displayedNumb
};

var resetAll = function () {
    var dispNumbs = document.getElementsByClassName("num");
    var totalNumb = document.getElementById("totalNumber");
    var finalTot = document.getElementById("dropAmount");

    Array.from(dispNumbs).forEach( function(el) {
        el.innerHTML = 0
        }
    );

    totalNumb.innerHTML = 0
    finalTot.innerHTML = 0
};

var checkNumbs = function(ob) {
    var invalidChars = /[^0-9]/gi
    if(invalidChars.test(ob.value)) {
        ob.value = ob.value.replace(invalidChars,"");
    }
};
