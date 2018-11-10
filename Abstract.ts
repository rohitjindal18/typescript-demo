abstract class Abs {
    abstract name: string;
    abstract age: number;
    abstract getName();
}


class Abs_2 extends Abs {
    name = "rohit";
    age = 12;
    getName() {
        return "rohit";
    }
}