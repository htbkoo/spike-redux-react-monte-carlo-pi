import React from 'react';
import groupBy from 'lodash/groupBy';

import Plot from 'react-plotly.js';
import {generateListOfCoordinates, isInCircle, MyCoordinates} from "./coordinatesGenerator";

export default function Canvas() {
    const {inside, outside} = generateData({count: 1000});
    console.log(inside);
    return (
        <Plot
            data={[
                {
                    ...asPlotData(inside),
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: 'blue'},
                    name: "inside",
                },
                {
                    ...asPlotData(outside),
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: 'red'},
                    name: "outside",
                },
            ]}
            layout={{
                width: 800,
                height: 800,
                title: 'Trying to demonstrate estimation of Pi with Monte Carlo algorithm',
                shapes: [
                    {
                        type: 'circle',
                        xref: 'x',
                        yref: 'y',
                        // fillcolor: 'lightblue',
                        x0: -1,
                        y0: -1,
                        x1: 1,
                        y1: 1,
                        line: {
                            color: 'lightblue'
                        }
                    },
                ],
                "xaxis": {"fixedrange": true, rangemode: "nonnegative"},
                "yaxis": {"fixedrange": true, rangemode: "nonnegative"},
            }}
        />
    );

    function generateData({count}: { count: number }): { inside: MyCoordinates[], outside: MyCoordinates[] } {
        const coordinatesPairs = generateListOfCoordinates({count});
        const {true: inside, false: outside} = groupBy(coordinatesPairs, coordinates => isInCircle({coordinates}));

        return {inside, outside};
    }

    function asPlotData(coordinatesPairs: MyCoordinates[]): { x: number[], y: number[] } {
        return coordinatesPairs.reduce((obj, coordinates) => {
            obj.x.push(coordinates.x);
            obj.y.push(coordinates.y);
            return obj;
        }, {x: [] as number[], y: [] as number[]})
    }
}