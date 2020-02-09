import range from 'lodash/range';

import {generateCoordinates, generateListOfCoordinates, isInCircle} from "./coordinatesGenerator";

describe("coordinatesGenerator", function () {
    describe("generateCoordinates", () => {
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
    });

    describe("generateListOfCoordinates", () => {
        it("should generate list of coordinates", () => {
            // given
            const count = 1000, coordinate = 0;
            const mockRandomFunc = () => coordinate;

            // when
            const data = generateListOfCoordinates({random: mockRandomFunc, count});

            // then
            expect(data.length).toEqual(count);

            data.forEach(coordinates =>
                expect(coordinates).toEqual({x: coordinate, y: coordinate,})
            );
        });
    });

    describe("isInCircle", () => {
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
    });

    describe("MISC", () => {
        xit("should estimate pi", () => {
            // const COUNT = 10, BATCH = 10;
            // const COUNT = 1000000, BATCH = 10;
            const COUNT = 10000000;
            const inCounts = range(COUNT).filter(() => isInCircle({coordinates: generateCoordinates()})).length;
            const estimatedPI = 4 * inCounts / COUNT;
            const error = (Math.abs(Math.PI - estimatedPI) / Math.PI) * 100;
            console.log(`COUNT: ${COUNT}, inCounts: ${inCounts}, estimated PI: ${estimatedPI}, error: ${error}%`);
        });
    });
});
