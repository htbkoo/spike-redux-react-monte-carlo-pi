import range from 'lodash/range';

import {generateCoordinates, isInCircle} from "./coordinatesGenerator";

describe("coordinatesGenerator", function () {
    it("should generate coordinates", () => {
        // given
        const generator = (function* () {
            yield 0.991802431776998;
            yield 0.6724734436367914;
        })();

        const mockRandomFunc = () => generator.next().value;

        // when
        const coordinates = generateCoordinates({random: mockRandomFunc});

        // then
        expect(coordinates).toEqual({
            x: 0.991802431776998,
            y: 0.6724734436367914,
        })
    });

    it("should check if coordinates is inside circle", () => {
        // given
        const coordinates = {
            x: 0.991802431776998,
            y: 0.6724734436367914,
        };

        // when
        const inCircle = isInCircle({coordinates});

        // then
        expect(inCircle).toEqual(false);
    });

    it("should estimate pi", () => {
        // const COUNT = 10, BATCH = 10;
        // const COUNT = 1000000, BATCH = 10;
        const COUNT = 10000000, BATCH = 10;
        const inCounts = range(COUNT).filter(() => isInCircle({coordinates: generateCoordinates()})).length;
        const estimatedPI = 4 * inCounts / COUNT;
        const error = (Math.abs(Math.PI - estimatedPI) / Math.PI) * 100;
        console.log(`COUNT: ${COUNT}, inCounts: ${inCounts}, estimated PI: ${estimatedPI}, error: ${error}%`);
    });
});
