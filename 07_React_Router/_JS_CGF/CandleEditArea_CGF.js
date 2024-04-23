"use strict";

function CandleEditArea_CGF() {

    var ele = document.createElement("div");

    ele.innerHTML = `
        
        <div class="editAreaC">
        </div>
        
        
        <h4>Message Area</h4>
        <div class="msgAreaC"></div>
        `;


    var editArea = ele.getElementsByClassName("editAreaC")[0];
    var msgArea = ele.getElementsByClassName("msgAreaC")[0];


    //var showButton = ele.getElementsByClassName("showButtonC")[0];



    var userInputSpecs = [
        {
            "prompt": "Candle Name: (required, must be between 5-30 characters) ",
            "fieldName": "CandleName",
            "dataType": "string",
            "isRequired": true, // required field
            "minLen": 5,
            "maxLen": 50
        }, {
            "prompt": "Candle Type: (optional; max 50 characters)",
            "fieldName": "CandleType",
            "dataType": "string",
            "isRequired": false, // required field
            "minLen": 0,
            "maxLen": 50
        },
        {
            "prompt": "Weight In Ounces: (required, max 16.99): ",
            "fieldName": "SizeInOz",
            "dataType": "number",
            "isRequired": true, // required field
            "minLen": 0,
            "maxLen": 16
        },
        {
            "prompt": "Pour Date: (optional)",
            "fieldName": "PourDate",
            "dataType": "date",
            "isRequired": false // means optional
        },
        {
            "prompt": "Quantity: (required, max 100)",
            "fieldName": "quant",
            "dataType": "number",
            "isRequired": true, // means optiona
            "minLen": 1,
            "maxLen": 100 // 
        },
        {  
            "fieldName": "radio",          
            "dataType": "radio",
            "prompt": "Wax Type:",
            "choices": ["Synthetic", "Soy", "Beez"],
            "selected": "Soy"
        },
        {          
            "fieldName": "select",  
            "dataType": "select",
            "prompt": "Scent:",
            "choices": ["Vanilla", "Lavendar", "Woodsy", "Jasmine", "None"],
            "selected": "None"
        }
        
    ];

    var userToEdit = {

        "CandleName": "Smell Me",
        "CandleType": "Mold",
        "SizeInOz": "7",
        "PourDate": "2021-12-30",
        "quant": "12",
    };


    function success(inpObj) {
        
        msgArea.innerHTML += "<br/>We will process your request with these values:<br/>";
        for (var propName in inpObj) {
            msgArea.innerHTML += "&nbsp; &nbsp; " + propName + ": " +
                inpObj[propName] + "<br/>";
                if(propName.dataType === "radio"){
                    msgArea.innerHTML += propName + ": " + inpObj[propName];
                }
                else if(propName.dataType === "select"){

                }
        }
        msgArea.innerHTML += "<br/>";

        msgArea.innerHTML += "To show that passing objects in JS is 'call by reference', " +
            "here is the original 'userToEdit' object (that also got changed):<br/>";
        for (propName in userToEdit) {
            msgArea.innerHTML += "&nbsp; &nbsp; " + propName + ": " +
                userToEdit[propName] + "<br/>";
        }
        msgArea.innerHTML += "<br/>";
    }
    function cancel() {
        msgArea.innerHTML += "Sorry that you decided to cancel.<br/><br/>";
    }

    var component = MakeEditArea({
        inputSpecs: userInputSpecs,
        successCallBack: success,
        cancelCallBack: cancel,
        editObj: userToEdit,
        title: "Candle Chosen: "
    });

    editArea.appendChild(component);
    //radioHolder.appendChild(radio1);
    //selectHolder.appendChild(select1);
    return ele;

} // validate_CGF