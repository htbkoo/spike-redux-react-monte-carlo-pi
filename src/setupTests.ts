console.debug(`at setupTest.ts`);

// reference: https://github.com/plotly/react-plotly.js/issues/115#issuecomment-448688902
console.debug(`mocking window.URL.createObjectURL`);
window.URL.createObjectURL = jest.fn();

export {};