const tup: [string, number] = ["rohit", 1];

function example(...args: [string, boolean, number]): void { };

// is same as 
declare function example1(args_0: string, args_1: boolean, args_2: number): void;

type Point3D = [number, number, number];

const draw = (...point3D: Point3D) => {
    console.log(point3D);
};

const xyzCoordinate: Point3D = [10, 20, 10];

draw(10, 20, 10);
draw(xyzCoordinate[0], xyzCoordinate[1], xyzCoordinate[2]);
draw(...xyzCoordinate);