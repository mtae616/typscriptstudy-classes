"use strict";
const person = {
    name: 'Mark',
    age: 29,
};
//객체에 keyof 를 붙이면 키들의 타입 반환
// => IPerson[keyof IPerson] => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp(obj, key) {
    return obj[key];
}
const b = getProp(person, 'name');
console.log(b);
// function setProp(obj:IPerson, key:'name'|'age', value: string | number): void{
//   obj[key] = value;
// }
