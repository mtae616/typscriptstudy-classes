interface IPerson {
  name : string;
  age: number;
}

const person:IPerson = {
  name: 'Mark',
  age: 29,
};

//객체에 keyof 를 붙이면 키들의 타입 반환
// => IPerson[keyof IPerson] => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const b = getProp(person, 'name');
console.log(b);

function setProp<T, K extends keyof T>(obj:T, key:K, value: T[K]): void{
  obj[key] = value;
}

setProp(person, "name", "Taesoo");