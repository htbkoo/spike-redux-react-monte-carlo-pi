export function generateCoordinates({random = Math.random}: { random: () => number }) {
    return {
        x: random(),
        y: random(),
    }
}
