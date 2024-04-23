"use strict";

/*
 MakeRadio: create and return a <form> tag that holds a radio group with overall prompt, 
 then prompts for all the choices. A <form> tag does not have a value property, but 
 I have added a custom property called "value" so that it is easier to use this component 
 alongside other input elements (which all have a "value" attribute). 
 Whenever the user clicks on any radio input, the form tag's value property is set to 
 the value of the clicked user choice.
 */

/* Here's an example of the "well formed HTML" that is the target of what we are trying 
to build. The "name" of all the radio button elements (within a form) must be the same 
so the browser bundles the radio buttons into one radio group. 
 
 Which pizza topping is your FAVORITE?<br/>
 <input type="radio" name="favTopping" value="Chz" /> Cheeze  <br/>
 <input type="radio" name="favTopping" value="Mush" checked /> Mushrooms <br/>
 <input type="radio" name="favTopping" value="Pep" /> Pepperoni <br/>

 NOTE: we typically avoid <form> tags with single page applications (because we do
    not want buttons inside of <form>'s to try to submit/reload the html page). 
    However, since we are creating the <form> tag and we are NOT putting any buttons 
    inside, it should be OK.
 */

// Destructured input parameter (with default values specified in function header). 
function MakeSelect({
    //prompt = "Enter a value",
    choices = ["Select List"],
    selected = "Unknown" }) {

    // MakeTag function possible input properties:
    //    htmlTag, innerHTML, cssClass, src, type, name, value, parent.
    // Provide only the properties that you need for the tag you are making. 
    var selectTag = MakeTag({
        htmlTag: "select",
        cssClass: "selectThing"
    });


    // "for .. of" is easier way to iterate over an array -- you don't have to use index i.
    // choice represents choices[i] if you had used an index value. 
    for (var choice of choices) {

        // if this choice matches selected, then make that radio button pre-selected. 

        // This adds the little circle in the paragraph (input type="radio")
        var option = MakeTag({
            htmlTag: "option",
            innerHTML: choice,
            value: choice,
            //selected: preSelected,
            parent: selectTag
        });

        if (selected === choice) {
            option.checked = true;
            selectTag.value = choice;
        }
    }

    // to get the selected value of the radio buttton, just access the public data member named "value" 
    // (makes it easier to use along with input elements which already have a public property "value". 

    return selectTag;
}