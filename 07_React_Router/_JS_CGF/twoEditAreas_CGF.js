"use strict";

function twoEditAreas_CGF(){
    var ele = document.createElement("div");
    var candles = CandleEditArea_CGF();
    ele.appendChild(CandleEditArea_CGF());
    ele.appendChild(UserEditArea_CGF()); // but use the CGF for your first entity
     // but use the CGF for your second entity
    return ele;
}