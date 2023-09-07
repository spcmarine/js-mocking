const sayHello = require('./sayHello')

  describe("sayHello", () => {
    it("personalised hello to user", () => {
      expect(sayHello('Janna')).toBe('Hello Janna!');
    });
  });