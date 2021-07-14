const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("creates ", () => {
      const engineer = new Engineer("Nate", 12345, "haile.natnael@gmail.com", "natnaelh14");
      expect(engineer.name) .toEqual(expect.any(String));
      expect(engineer.id) .toEqual(expect.any(Number));
      expect(engineer.email) .toEqual(expect.any(String));
      expect(engineer.github) .toEqual(expect.any(String));
    });
  });