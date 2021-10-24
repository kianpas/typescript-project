//Primitives: number, string, boolean 소문자로 시작
//complex types : arrays, objects
//function type, parameters

//Primitives
let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//null 가능하나 큰 의미 x
//let hobbies:null;

//complex types
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

//type aliase
type Person = {
  name: string;
  age: number;
};

//어떠한 타입도 올 수있다는 의미
//허나 타입스크립트 의미없게 만듬
//let person:any;

//객체가 들어올수 있도록함
//let person : {}

//각 객체값의 타입 설정 가능
let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

//아래의 객체 형태를 가진 배열 의미
let people: {
  name: string;
  age: number;
}[];

//type inference
//let course:string | number = "react - the guide";
//에러
//course = 1234;

//union type
let course: string | number = "react - the guide";
//에러 안남
course = 1234;

//Function & types
//함수 결과에 데한 타입, 유니온도 가능
//보통 불필요
// function add(a: number, b: number): number {
//   return a + b;
// }

//리턴이 없으므로 void
function print(value: any) {
  console.log(value);
}

//Generics
//제네릭을 통해 입력한 파라미터에 따라 타입이 정해짐. 유연하게 사용
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1,2,3]
const stringArray= insertAtBeginning(["a", "b", "c"], "d");


//stringArray[0].split("");
