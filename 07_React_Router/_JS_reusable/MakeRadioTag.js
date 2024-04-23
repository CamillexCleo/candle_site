"use strict";

// Builds a DOM element, sets various properties (if provided), may append this DOM element 
// to a parent. Returns the built DOM element. 
// * htmlTag: type of DOM element to be created (if not provided, creates a div).
// * innerHTML: if provided, set the innerHTML property of the new DOM element to this. 
// * cssClass: if provided, adds this css class to the new DOM element
// * src: if provided, sets the src attribute to this image file name (for img tags).
// * type: if provided, sets the type attribute  (for input tags).
// * parent: if provided, append this new DOM element to this given parent (must be a DOM element)
function MakeTag( {htmlTag="div", innerHTML, src, type, name, value, cssClass, parent }) {

    var ele = document.createElement(htmlTag);

    if (innerHTML) {
        ele.innerHTML = innerHTML;
    }
    if (src) {
        ele.src = src;
    }
    if (type) {
        ele.type = type;
    }
    if (name) {
        ele.name = name;
    }
    if (value) {
        ele.value = value;
    }
    if (cssClass) {
        ele.classList.add(cssClass);
    }
    if (parent) {
        parent.appendChild(ele);
    }

    return ele;
}