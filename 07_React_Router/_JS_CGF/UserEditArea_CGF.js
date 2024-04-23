"use strict";

function UserEditArea_CGF() {

    var ele = document.createElement("div");

    ele.innerHTML = `
        <div class="editAreaC"></div>
        <h4>Message Area</h4>
        <div class="msgAreaC"></div>
        `;

    var editArea = ele.getElementsByClassName("editAreaC")[0];
    var msgArea = ele.getElementsByClassName("msgAreaC")[0];

    /*  My sample JSON data (pretend coming from DB). 
        Make your JS field names match your JSON field 
        names to prevent issues. 

        "webUserId": "1",
        "userEmail": "abha@temple.edu",
        "image": "https://cis-linux2.temple.edu/~sallyk/pics_users/abha.jpg",

        // date format like this to prepopulate html date input tag
        "birthday": "2001-02-29",

        "membershipFee": "",
        "userRoleId": "3",
        "userRoleType": "Member",
        "errorMsg": ""
    */


var userInputSpecs = [
{
    "prompt": "Order Confirmation: ",
    "fieldName": "orderCon",
    "dataType": "string",
    "isRequired": true, // required field
    "minLen": 5,
    "maxLen": 30
},
{
    "prompt": "Candle Source/Website: (optional) ",
    "fieldName": "candleWeb",
    "dataType": "string",
    "isRequired": false, // empty string is OK
    "minLen": 0,
    "maxLen": 500
},
{
    "prompt": "Order Date: (required)",
    "fieldName": "orderDate",
    "dataType": "date",
    "isRequired": true 
},
{
    "prompt": "Number of Candles Purchased: ",
    "fieldName": "candlesPur",
    "dataType": "integer",
    "isRequired": true, 
    "minLen": 1,
    "maxLen": 50 // 10 characters including decimal point
},
{
    "prompt": "Number of Orders: ",
    "fieldName": "NumofOrders",
    "dataType": "number",
    "isRequired": true, // means optional
    "minLen": 1,
    "maxLen": 500 // 10 characters including decimal point
},
{       
    "fieldName": "radio",        
    "dataType": "radio",
    "prompt": "Order Rating:",
    "choices": [ "Above and Beyond","Satisfactory", "Needs Work"],
    "selected": ""
},
{   
    "fieldName": "select",           
    "dataType": "select",
    "prompt": "Would You Recommend To a Friend?",
    "choices": ["Definitely Yes", "Yes", "Maybe", "Probably Not", "Definitely Not"],
    "selected": ""
}
];

    var userToEdit = {
        "orderCon": "ZYX",
        "candleWeb": "www.candles.com",
        "candlesPur": "5", // right format to prefill html date input tag
        "NumofOrders": "5",
    };

    function success(inpObj) {
        msgArea.innerHTML += "We will process your request with these values:<br/>";
        for (var propName in inpObj) {
            msgArea.innerHTML += "&nbsp; &nbsp; " + propName + ": " +
                inpObj[propName] + "<br/>";
        }
       /*/ msgArea.innerHTML += "<br/>";

        msgArea.innerHTML += "To show that passing objects in JS is 'call by reference', " +
            "here is the original 'userToEdit' object (that also got changed):<br/>";
        for (propName in userToEdit) {
            msgArea.innerHTML += "&nbsp; &nbsp; " + propName + ": " +
                userToEdit[propName] + "<br/>";
        }
        msgArea.innerHTML += "<br/>";
        */
    }

    function cancel() {
        msgArea.innerHTML += "Sorry that you decided to cancel.<br/><br/>";
    }

    var component = MakeEditArea({
        inputSpecs: userInputSpecs,
        successCallBack: success,
        cancelCallBack: cancel
        
    });
    editArea.appendChild(component);

    return ele;

} // validate_CGF