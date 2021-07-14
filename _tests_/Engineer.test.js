//import Engineer class
const Engineer = require("../lib/Engineer");
//Engineer input test
describe("Enginner", () => {
    const engineer = new Engineer("Nate", 12345, "haile.natnael@gmail.com", "natnaelh14");
  describe("Initialization", () => {
    it("creates 'engineer' object contents", () => {
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));
    });
  });
  describe("engineer function calls", () => {
    it("validates getGithub() function call", () => {
      expect(engineer.getGithub()).toEqual(expect.any(String));
    });
    it("validates getRole() function call", () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
