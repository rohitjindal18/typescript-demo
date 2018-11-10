import {
    EnumEntity
} from './enumExample';

import PersonClass from './classExample';
type enumType = {
    num1: number,
    num2: number
};

// intersection example
type intersection = enumType & EnumEntity;
const index: Array<number | string | boolean> = [1, 2, 3, 4, "AS", true];

function add(num1: enumType, num2: enumType): number {
    const person = new PersonClass({
        first: 1
    });
    person.first = "as";
    return num1.num1 + num2.num2;
}


// Inferred return type is number
function move1(direction: "up" | "down") {
    switch (direction) {
        case "up":
            return 1;
        case "down":
            return -1;
    }
    return "Should never get here";
}