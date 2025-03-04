type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
};
