"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new Person("Mark", 39);
// new Person<string>(39);
new Person("Mark", 29);
