"use strict";

function MakeCand_CGF2() {
  var ele = document.createElement("div");

  var myCandle1 = MakeCand({
    candType: "Mold",
    scent: "Lavendar",
    weight: 9,
    imgURL: "pics/candlemold.jpeg",
    imgObjList: [
      { display: "Mold", val: "pics/candlemold.jpeg" },
      { display: "Tealight", val: "pics/tealight.jpeg" },
      { display: "Container", val: "pics/container.jpeg" },
    ],
  });
  ele.appendChild(myCandle1);

  var myCandle2 = MakeCand({
    candType: "Waxmelt",
    scent: "Vanilla",
    weight: 4,
    imgURL: "pics/waxmelt.jpeg",
    imgObjList: [
      { display: "Wax Melt", val: "pics/waxmelt.jpeg" },
      { display: "Tealight", val: "pics/tealight.jpeg" },
      { display: "Container", val: "pics/container.jpeg" },
    ],
  });
  ele.appendChild(myCandle2);

  var yourCandle = MakeCand({});
  ele.appendChild(yourCandle);

  return ele;
}
