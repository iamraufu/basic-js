// var inch = 156;
// var foot = inch / 12;

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var xFeet = inchToFeet(156);
var yFeet = inchToFeet(168);
var aFeet = [48, 60, 72];
var arrFeet = inchToFeet(aFeet[1]);

console.log(xFeet);
console.log(yFeet);
console.log(arrFeet);