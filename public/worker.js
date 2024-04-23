self.onmessage = (event) => {
  const number = event.data;
  const result = number * number;
  self.postMessage(result);
};