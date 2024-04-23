"use strict"; // prevent browser from globally auto-declaring variables
//   <MakeCandListR
    //     candList={beesWax}
    //     listTitle="Candle Collection:"
    //     listWax="Bees Wax"
    //   />
function MakeCandListR ({candList=[{}], listTitle="Unlisted Title", listWax="Unknow Wax Type"}) {
        function PrivateMakeCandR ( {
            candName="no name",
            theCandType="unknown",
            theWeight=0.00,
            scent="none",
            imgURL= null,
            imgObjList= [{ "display": "RANDOM", "val": "pics/images.jpeg"}]
        } ) {

            function strToNum(numStr) {
                numStr += ""; // convert to string, if it's not a string.

                // remove formatting characters, if there are any
                numStr = numStr.replace("$", "");
                numStr = numStr.replace(",", "");

                var num = Number(numStr); // convert to number again.
                return num;
            }

        

            // Declare a new state variable called 'condition' with initial value = theCondition.
            // Use setCondition whenever you need to change the value of this state variable.
            const [weight, setWeight] = React.useState(theWeight);

            
            // Declare a new state variable called 'conditionInput' with initial value = empty string.
            // Use setConditionInput whenever you need to change the value of this state variable.
            const [weightInput, setWeightInput] = React.useState("");

            // Declare a new state variable called 'price' with initial value = formatCurrency(thePrice).
            // Use setPrice whenever you need to change the value of this state variable.
            const [candleType, setCandleType] = React.useState(theCandType);
            
            // Declare a new state variable called 'priceFactorInput' with initial value = empty string.
            // Use setPrice whenever you need to change the value of this state variable.
            const [candleTypeInput, setCandleTypeInput] = React.useState("");
        
            const [selectVal, setSelectVal] = React.useState(imgObjList[0].val); //Assuming the first image is selected by default

                const handleSelectChange = (event) => {
                    setSelectVal(event.target.value);
                };


                const [candleNum, setCandleNum] = React.useState(0); //number of candles owned


                //Handles changes for the slider
                const handleSliderChange = (event) => {
                    setCandleNum(event.target.value);
                };

            function changeCandleType () {
                setCandleType(candleTypeInput);
                // no need for a "display" function -- react redisplays automatically
                // whenever a state variable changes (using the official state variable setter function). 
            }

            function changeWeight () {
                var n = Number(weightInput);
                console.log("changing the weight of the candle by this rate " + n);
                console.log(weight);
                var currentWeight = Number(weight) + n;
                setWeight(currentWeight);
                // no need for a "display" function -- react redisplays automatically
                // whenever a state variable changes (using the official state variable setter function). 
            };


            console.log("their Candle Type is " + candleTypeInput+", Weight is "+ weightInput);
            return (
                <div class = "candle">
                Candle Name: {candName} <br/>    
                Candle Type: {candleType} <br/>
                Scent: {scent} <br/>
                Weight: {weight} <br/>
                
                <img src= {selectVal}/> <br/>
                Select Image:
                <select value={selectVal} onChange={handleSelectChange}>
                        {
                            imgObjList.map(img =>
                                <option key={img.val} value={img.val}>{img.display}
                                </option>
                            )
                        }
                    </select> <br/>
                <button onClick={changeCandleType}> Change Candle Type to: </button>
                <input value={candleTypeInput} onChange={e=>setCandleTypeInput(e.target.value)} /> <br/>
                <button onClick={changeWeight}>Add/Subtract Weight in Ounces: </button>
                <input value={weightInput} onChange={e=>setWeightInput(e.target.value)} /> 
                <p>How many candles do you own? <span>{candleNum}</span></p>
                    <input type="range" min="0" max="50" value={candleNum} className="slider" id="myRange" onChange={handleSliderChange}/>
                
            </div>
            )

        }  // close makecandR 
            return(
                <div className="candList">
                    <h2>{listTitle}</h2><br/>
                    <h4>{listWax}</h4>
                    {
                        candList.map(cand =>
                            <PrivateMakeCandR candName={cand.candName} theCandType={cand.theCandType} theWeight={cand.theWeight}
                            scent={cand.scent} imgURL={cand.imgURL} imgObjList={cand.imgObjList}
                            /> 
                            )
                    }
                </div>

            );
        
    }