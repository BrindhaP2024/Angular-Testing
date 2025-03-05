/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

function performHeavyCalculation(input: number): number {
  let sum = 0;
  for (let i = 0; i < input; i++) {
    sum += i;
  }
  return sum;
  console.log(performance.now());
  console.log(performance.measure)
}
