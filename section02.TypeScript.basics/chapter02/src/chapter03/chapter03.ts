// let user: object = {
//     id: 1,
//     name: "문동민",
// };
//
// user.id;


let user: {
    id?: number;
    readonly name: string;
} = {
    id: 1,
    name: "문동민",
};

user = {
    name: "홍길동",
};

user.name= 'asfd'; // 오류 발생
