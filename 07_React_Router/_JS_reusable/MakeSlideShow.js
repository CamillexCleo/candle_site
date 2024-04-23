"use strict";

/*
 * Note that we expect a parameter object with two properties. 
 * If any param property is not provided, default values have been specified.
 */

//MakeSlideShow takes in two parameters one being a picList array of objects. Containting
// an image and candType element. The other parameter being ssTitle: string
function MakeSlideShow ({ 
    candName= "Unknown",
    picObjList= [{
    fileName:"pics/null.jpeg",
     candType:"unknown candle type",
     weight: 0.00,
     scent: "none"
    }],
   
}) {
    var picNum = 0;
    
    console.log("pic obj list will be on next line");
    console.log(picObjList);

    var slideShow = document.createElement("div");
    slideShow.classList.add("slideShow");

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);
    //add a paragraph that will hold avgSalary\
    var candleName = document.createElement("p");
    div.append(candleName);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);

    // add candType into the div & set the candType's src attribute to show candType
   var candType = document.createElement("div");
   candType.classList.add("pink");
   div.appendChild(candType);
   

   //create button div
    var buttonDiv = document.createElement("div");
    slideShow.appendChild(buttonDiv);
    
    //to store more info for my hideshow
    var candInfo = document.createElement("div");
    candInfo.classList.add("pink");
    slideShow.appendChild(candInfo);

    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    buttonDiv.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    buttonDiv.appendChild(fwdButton);

    //showMore div
    var showMoreButton = document.createElement("button");
    showMoreButton.innerHTML = "More";
    buttonDiv.appendChild(showMoreButton);
 
    
    //showLess div
    var showLessButton = document.createElement("button");
    showLessButton.innerHTML = "Less";
    buttonDiv.appendChild(showLessButton);

    showMoreButton.onclick = moreInfo;

    showLessButton.onclick = hideInfo;

    // private variable that keeps track of which image is showing
    
    setPic();
    

    function setPic() {
        myImage.src = picObjList[picNum].fileName;
       
        // change the candType too
        candType.textContent = picObjList[picNum].candType;

        candleName.innerHTML = candName;

        
    }
    
    function moreInfo(){
        candInfo.innerHTML = "</br> Scent: " + picObjList[picNum].scent + "</br> Weight In Oz: " + picObjList[picNum].weight
        + "</br> Candle Type: " + picObjList[picNum].candType;
        candType.classList.add("pink");
    } 

    function hideInfo() {
        candInfo.innerHTML = "";
    }

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < picObjList.length-1) { 
            picNum++;
        }
        setPic();
        hideInfo();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
        hideInfo();
    }

    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;
    

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < picObjList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
       }
    };

    return slideShow;
}