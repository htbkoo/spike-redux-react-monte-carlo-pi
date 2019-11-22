interface MyCoordinates {
    x: number,
    y: number
}

export function generateCoordinates({random = Math.random}: { random: () => number }): MyCoordinates {
    return {
        x: random(),
        y: random(),
    }
}

export function isInCircle({coordinates: {x, y}}: { coordinates: MyCoordinates }) {
    const radius = 1;
    return Math.sqrt(x * x + y * y) < radius;
}
