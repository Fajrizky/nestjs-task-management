function addNumbers(num1, num2) {
  return num1 + num2;
}

describe('addNumbers', () => {
  it('should add two numbers', () => {
    expect(addNumbers(1, 2)).toEqual(3);
  });
});

// describe('Example test', () => {
//   it('equals true', () => {
//     expect(true).toBe(true);
//   });
// });
