import range from "lodash/range";

export interface MyCoordinates {
    x: number,
    y: number
}

export function generateCoordinates({random = Math.random}: Partial<{ random: () => number }> = {}): MyCoordinates {
    return {
        x: random(),
        y: random(),
    }
}

export function generateListOfCoordinates({random = Math.random, count}: { random?: () => number, count: number }): MyCoordinates[] {
    return range(count).map(() => generateCoordinates({random}));
}

export function isInCircle({coordinates: {x, y}}: { coordinates: MyCoordinates }) {
    const radius = 1;
    return Math.sqrt(x * x + y * y) < radius;
}
