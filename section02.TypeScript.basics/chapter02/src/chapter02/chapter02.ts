export {};
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterlood"];

////////////////////////////////////////////////////////////////

let multiArr1 = [1, "hello"];

let multiArr2: (number | string)[] = [1, "hello"];

////////////////////////////////////////////////////////////////

let doubleArr : number[][] = [
    [1, 2, 3],
    [4, 5],
];

////////////////////////////////////////////////////////////////

let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

let tup3: [number, number] = [1, 2];

tup3.push(1);
tup3.push(1);
tup3.push(1);
tup3.push(1);
