let foo:string = 'hello';

let bar: number = true;

function multiply1(x: number, y: number): number {
  return x * y;
}

const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(true, 2));

//boolean
let isDone: boolean = false;

//null
let n: null = null;

//undefined
let u: undefined = undefined;

//number
let decimal: number = 6;

//string
let color: string = "black";

//array
let list1: any[] = [1, 'two', 3];
let list2: number[] = [1, 'two', 3];
let list3: Array<number> = [1, 'two', 3];

//tuple
//tupe은 고정된 요소 수 만큼의 타입을 미리 선언 후 배열을 표현합니다.
let tuple: [string, number];
tuple = ['hello', 10];  //good
tuple = [10, 'hello'];  //error
tuple = ['hello', 10, 11] //error
tuple.push(true); //error

//enum
//열거형은 숫자값 집핣에 이름을 지정한 것입니다.
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1);  // 1

//any
//타입추론할 수 없거나 타입 체크가 필요없는 변수에 사용됩니다.
//var키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있습니다.
let notSure: any: 4;
notSure = 'hihihi'; //good
norSure = true; //good

//void
//일반적으로 함수에서 반환값이 없을때 사용합니다.
funtion warnUser(): void {
  console.log('warning - - - - -');
}

