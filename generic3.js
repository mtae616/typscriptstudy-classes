"use strict";
function helloArray(message) {
    return message[0];
}
console.log(helloArray(['Hello', 'World']));
//T 타입은 string
helloArray(["hello", 5]);
//T 타입이 string | number 로 union 타입이 됨
function helloTuple(message) {
    return message[0];
}
helloTuple(["hello", "world"]);
helloTuple(["hello", 5]);
//앞은 string 뒤는 number라 T 타입이 string , 위의 union과 다름
