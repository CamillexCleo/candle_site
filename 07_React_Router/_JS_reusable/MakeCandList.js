"use strict";

function MakeCandList({candList=[{}], listTitle="Unknown Title"}) {

        function MakeCand ({
                candType="unknown",
                weight=0.00,
                scent="none",
                imgURL= null,
                imgObjList= [
                { "display": "RANDOM", "val": "pics/candlemold.jpeg"},
                
                ]

        }){

            var candObj = document.createElement("div");
            candObj.classList.add("cand");


        // first use of “.title” creates custom (public) property of empObj
        candObj.scent = scent;

        // salary is private property of empObj (because normal variable declaration in MakeEmp
        var size = weight ;
        var candleType = candType;



        // Condition setter method (public) - could be used from outside MakeEmp
        candObj.changeCandType = function (newCand) {
            candleType = newCand;
            display(); // show updated property on the page
        };

        // public method to modify price 
        candObj.changeSize = function (newSize) {
            var n = Number(newSize);
            console.log("changing the weight of the candle by this rate " + n);
            size =  n;
            display(); // show updated price on the page
        };

        // Build the UI with back tick, more similar to how you would create things coding with HTML.
        // Add a class to every DOM element that you want to style and/or access with JavaScript. 
        candObj.innerHTML = `
        <div class='candInfoClass'></div>
        <button class='candButtonClass'>Change Candle Type To: </button>
        <input class='candInputClass'/> <br/>
        <button class='sizeButtonClass'>Change Candle Size To: </button>
        <input class='sizeFactorInputClass'/>  <br/>
        Select image: <select class = 'selectImageC'></select>
        `;


        // Create variable references for all DOM elements (above) that we need to programatically access. 
        var candInfo = candObj.getElementsByClassName("candInfoClass")[0];


        var candButton = candObj.getElementsByClassName("candButtonClass")[0];
        var candInput = candObj.getElementsByClassName("candInputClass")[0];

        var sizeButton = candObj.getElementsByClassName("sizeButtonClass")[0];
        var sizeFactor = candObj.getElementsByClassName("sizeFactorInputClass")[0];

        // create variables for all aspects of candObj.innerHTML that we need to reference
        var selectImage = candObj.getElementsByClassName("selectImageC")[0];
        // set the initial value of the <select> tag based on consumer's condition property


        // private method display, refreshes the Info div with current values for 
        // title and salary. 
        var display = function ( ) { //empObj.display = function()'
            candInfo.innerHTML = `
            <p>
                Scent: ${candObj.scent} <br/>
                Candle Type: ${candleType} <br/>
                Size in Ounces: ${size} <br/>
            </p>
            <p>
            <img src= "${selectImage.value}"/>

            </p>
            `;
        };
        display(); 

        for (var listEle of imgObjList) {
            var opt = document.createElement("option");
            opt.innerHTML = listEle.display;
            opt.value=listEle.val;
            selectImage.appendChild(opt);
        }
        selectImage.value = imgURL;
        display(); // do this or the empInfo area will be blank initially

        selectImage.onchange = function() {
            display();
        };

        function alertMe(){
            alert("You have selected a new candle size!");
        }

        candButton.onclick = function () {
            candObj.changeCandType(candInput.value);
        };

        sizeButton.onclick = function () {
            candObj.changeSize(sizeFactor.value);
            alertMe();
        };


        return candObj;
        }
        var candListComp= document.createElement("div");
        candListComp.classList.add("candList");
        candListComp.innerHTML = `<h2>${listTitle}</h2>`;
        
        for(var candObj of candList) {
            candListComp.appendChild(MakeCand(candObj));
        }
        return candListComp;
}