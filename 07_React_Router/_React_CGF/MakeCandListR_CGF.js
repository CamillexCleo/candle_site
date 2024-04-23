"use strict";

function MakeCandListR_CGF() {
  console.log("MakeCandListR_CGF");
  var beesList = [
    { display: "Mold", val: "pics/bees1.jpg" },
    { display: "Tealight", val: "pics/bees2.jpg" },
    { display: "Container", val: "pics/bees3.jpg" },
  ];
  var cocoList = [
    { display: "Mold", val: "pics/coco1.jpg" },
    { display: "Tealight", val: "pics/coco2.jpg" },
    { display: "Container", val: "pics/coco3.jpg" },
  ];
  var synList = [
    { display: "Mold", val: "pics/syn1.jpg" },
    { display: "Tealight", val: "pics/syn2.jpg" },
    { display: "Container", val: "pics/syn3.jpg" },
  ];
  var palmList = [];
  var beesWax = [
    {
      candName: "Sweet Vanilla",
      theCandType: "Container",
      theWeight: "7",
      scent: "Vanilla",
      imgURL: "pics/images.jpeg",
      imgObjList: beesList,
    },
    {
      candName: "Sweet Vanilla",
      theCandType: "Container",
      theWeight: "7",
      scent: "Vanilla",
      imgURL: "pics/images.jpeg",
      imgObjList: beesList,
    },
  ];
  var synWax = [
    {
      candName: "Sweet Vanilla",
      theCandType: "Container",
      theWeight: "7",
      scent: "Vanilla",
      imgURL: "pics/images.jpeg",
      imgObjList: synList,
    },
    {
      candName: "Sweet Vanilla",
      theCandType: "Container",
      theWeight: "7",
      scent: "Vanilla",
      imgURL: "pics/images.jpeg",
      imgObjList: synList,
    },
  ];
  var cocoWax = [
    {
      candName: "Sweet Vanilla",
      theCandType: "Container",
      theWeight: "7",
      scent: "Vanilla",
      imgURL: "pics/images.jpeg",
      imgObjList: cocoList,
    },
    {
      candName: "Sweet Vanilla",
      theCandType: "Container",
      theWeight: "7",
      scent: "Vanilla",
      imgURL: "pics/images.jpeg",
      imgObjList: cocoList,
    },
    {},
  ];
  return (
    <div  class="candListR">
      <MakeCandListR
        candList={beesWax}
        listTitle="Candle Collection:"
        listWax="Bees Wax"
      />
      <MakeCandListR
        candList={cocoWax}
        listTitle="Candle Collection:"
        listWax="Coconut Wax"
      />
      <MakeCandListR
        candList={synWax}
        listTitle="Candle Collection:"
        listWax="Synthetic Wax"
      />
      <MakeCandListR />
   </div> 
    );
}
