interface StringCheck<T> {
    [k: string]: T
}


const T: StringCheck<string> = {
    rohit: "jindal",
    jindal: 12
}

const T1: StringCheck<number> = {
    rohit: "jindal",
    jindal: 12
}