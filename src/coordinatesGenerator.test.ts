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
});
