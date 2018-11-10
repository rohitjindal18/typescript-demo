class Singleton {
    private static instance;
    private constructor() { };

    public static getInstance() {
        if (!Singleton.instance) {
            return new Singleton();
        } else {
            return Singleton.instance;
        }
    }
}