let length = 3;
let width = 4.5;

function getArea(length,width) {
    let area;
    length = 3;
    width = 4.5;
    area = length *  width ;
    return area
}

function getPerimeter(length,width) {
    let perimeter;
    length = 3;
    width = 4.5;
    perimeter = (length+width)*2;

    return perimeter;
}

console.log(getArea());
console.log(getPerimeter());