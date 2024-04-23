"use strict";

function SlideShow_CGF() {
     // Create a DOM element (div) like a CGF would do. 
  var ele = document.createElement("div");

  // style ele as a flex box and place two divs in that flex box
  // (each 50% wide). Each of these divs will hold one slide show.

  ele.innerHTML = `
                <style>
                  .ssFlex {
                    display:flex;
                    flex-direction:row;
                  }
                  .ssFlex .ssHolder {
                    width: 32%;
                    box-sizing:border-box;
                    text-align:center;
                    margin-left: 0.5%;
                    margin-right:0.5%;
                  }
                </style>
                <div class="firstDiv ssHolder">
                  <h3>Synthetic Candles </h3>
                </div>
                <div class="secondDiv ssHolder">
                  <h3>Soy Candles</h3>
                </div>
                <div class="thirdDiv ssHolder">
                  <h3>RANDOM</h3>
                </div>
              `;

  ele.classList.add("ssFlex"); // if we want ele to pick up the above 'ssFlex' styling. 

  // Get a reference to the two divs into which you want to place 
  // slide show components. 
  var firstDiv = ele.getElementsByClassName("firstDiv")[0];
  var secondDiv = ele.getElementsByClassName("secondDiv")[0];

  // // Shows how an ajax error is handled -- you'll see an error 
  // // message on the page. waterFunnn.json is mispelled.
  ajax("json/candles.json", newCandleList, firstDiv);
  function newCandleList(synList) {

  //   // funList is what you get back from the ajax call - the contents of the json file, 
  //   // converted to a JavaScript object.

    var synObjImages=[];

    // MakeSlideShow expects an array of image file names. 
    for (var i = 0; i < synList.length; i++) {
      synObjImages[i] = {
        fileName: synList[i].image, 
        candType: synList[i].CandleType, // if item is what you want for candle type... 
        weight: synList[i].SizeInOz,  // if item is what you want for size... 
        scent: synList[i].Scent  // if item is what you want for your scent... 
    };
    }

    console.log("candles on next line");
    console.log(synObjImages);
    var ss = MakeSlideShow({ 
        picObjList: synObjImages,
        candName:"This slideshow displays all the Synthetic Wax Candles"
    });
    firstDiv.appendChild(ss);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss.setPicNum(1);
  }


  ajax("json/candles2.json", newSoyList, secondDiv);
  function newSoyList(soyList) {
  var soyObjImages=[];

    // MakeSlideShow expects an array of image file namesct has a property calf", 
    // So let's create a new Object List that has the right property names inside.
    // We can use the map function to do this instead of the technique used above. 
    // For each cat in cat list, we are returning a different object that'll get added to array 'newCatList'.
   // var soyObjList = soyList.map(function (soyObj) {
     // return {};
        for (var i=0; i <soyList.length; i++){
        soyObjImages[i]= {
        fileName: soyList[i].image, 
        candType: soyList[i].CandleType, // if item is what you want for your caption... 
        weight: soyList[i].SizeInOz,  // if item is what you want for your year... 
        scent: soyList[i].Scent 
};   }     
    

    var ss2 = MakeSlideShow({ 
        picObjList: soyObjImages,
        candName:"This slideshow displays all the Soy Wax Candles"
            });
    secondDiv.appendChild(ss2);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss2.setPicNum(0);
  }

  // To show how MakeSlideShow deals with an empty object parameter, there's no need to make an AJAX call... 
  var thirdDiv = ele.getElementsByClassName("thirdDiv")[0];
  var ss3 = MakeSlideShow({});
  thirdDiv.appendChild(ss3);

  return ele;
}