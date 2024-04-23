"use strict";

function MakeCandList_CGF() {
    var tacoEle = document.createElement("div");
    var myCandleList = [
        {
            candType: "Waxmelt",
            scent: "Vanilla",
            weight: 4,
            imgURL: "pics/waxmelt.jpeg",
            imgObjList: [
                {"display":"Wax Melt" , "val":"pics/waxmelt.jpeg" },
                {"display": "Tealight" , "val": "pics/tealight.jpeg" },
                {"display": "Container", "val": "pics/container/jpeg"}

            ]

    },
    {
            candType: "Pillar",
            scent: "Clean Linen",
            weight: 10,
            imgURL: "pics/images.jpeg",
            imgObjList: [
                {"display": "Pillar", "val": "pics/images.jpeg"},
                {"display": "Tealight", "val": "pics/tealight.jpeg"},
                {"display": "Container" , "val": "pics/container.jpeg" }
            ]
    }, 
    {
            candType: "Votives",
            scent: "Lavendar",
            weight: 6,
            imgURL: "pics/container.jpeg",
            imgObjList: [
                {"display": "Mold", "val": "pics/candlemold.jpeg"},
                {"display": "Tealight", "val": "pics/tealight.jpeg"},
                {"display": "Container" , "val": "pics/container.jpeg"},
            ]
    }
];
var yourCandleList = [
    {
            candType: "BeesWax",
            scent: "Tree Sap",
            weight: 11,
            imgURL: "pics/yourcand1.jpg",
            imgObjList: [
                {"display": "Bees Wax", "val": "pics/yourcand1.jpg"},
                {"display": "Tealight", "val": "pics/tealight.jpeg"},
                {"display": "Container" , "val": "pics/container.jpeg" }
            ]
    },
    {
        candType: "Floating Candle",
        scent: "Mocha Chia",
        weight: 2,
        imgURL: "pics/youcand2.jpg",
        imgObjList: [
            {"display": "Floating", "val": "pics/youcand2.jpg"},
            {"display": "Tealight", "val": "pics/tealight.jpeg"},
            {"display": "Container" , "val": "pics/container.jpeg" }
        ]
    }
];  
    var myCandleComp = MakeCandList ({
        candList: myCandleList,
        listTitle: "My Candle Collection"
    });
    tacoEle.appendChild(myCandleComp);

    var yourCandleComp = MakeCandList ({
        candList: yourCandleList,
        listTitle: "Your Candle Collection" //object list with an empt object
    });
    tacoEle.appendChild(yourCandleComp);

    var emptyCandComp= MakeCandList({});
    tacoEle.appendChild(emptyCandComp);
    return tacoEle;

    



}