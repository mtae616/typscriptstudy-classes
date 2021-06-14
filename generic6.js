"use strict";
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
new PersonExtends('Mark');
new PersonExtends(56);
// new PersonExtends(true); -> 에러
