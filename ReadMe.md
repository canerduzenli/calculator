
# Read Calculator

This is a HTML and CSS code for a basic calculator. The calculator is enclosed in a section 
element, and its main container is a div element with a class of "calculator". The display 
section of the calculator is contained in a div with a class of "display" and an input 
element with a class of "screen" that is set to read-only.

The calculator buttons are contained in a div with a class of "container". The buttons are 
arranged in rows and columns using the CSS grid system. Each row is contained in a div 
element with a class of "row", and each column is contained in a div element with a class of 
"col". The buttons are created using button elements with different values assigned to them. 
The operators are assigned a class of "operator", the equal sign is assigned a class of 
"calculate", and the decimal point is assigned a class of "decimal".


The CSS code includes styles for the various elements of the calculator, including the 
font-family, font-size, and colors. The buttons have a default background color of #ddd and 
change to #ccc on hover. The operators and the equal sign have a different width than the 
other buttons.


The CSS code also includes a media query that sets the width of the calculator to 100% on 
screens that are smaller than 500 pixels.

The JavaScript code that controls the calculator is included in an external file called 
"index.js". The file includes functions that append values to the calculator display when the 
buttons are clicked and a function that calculates the result when the equal sign is clicked. 
The clear button sets the display to zero.

You can<a href="https://canerduzenli.github.io/calculator/">Click</a>to try open it.