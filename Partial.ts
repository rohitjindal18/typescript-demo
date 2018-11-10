interface Person {
    name: string;
    age: number;
    location: string;
}

type PartialPerson = Partial<Person>;

const t: PartialPerson = {
    name: "rohit"
}

const y: Person = {
    name: "rohit"
}