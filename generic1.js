"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들...
function hello(message) {
    return message;
}
console.log(hello('Mark').length);
console.log(hello(39).length);
function helloGeneric(message) {
    //인자에 string 이 들어오면 t -> string
    //인자에 number 가 들어오면 t-> number
    return message;
}
console.log(helloGeneric('Mark').length);
//mark 가 string 의 하위 타입이기 때문에 string 으로 추론
console.log(helloGeneric(39));
console.log(helloGeneric(true));
