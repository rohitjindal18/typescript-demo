export default class PersonClass {
    first: string;
    public last: string;
    private account: number;
    public readonly accountId: string;

    constructor(data) {
        this.first = data.first;
        this.accountId = data.as;
    }

    public publicMethod() {

    }

    private privateMethod() {

    }
}