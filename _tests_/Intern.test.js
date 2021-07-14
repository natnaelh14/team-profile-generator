//import Intern Class
const Intern = require("../lib/Intern");
//Intern input test
describe("Intern", () => {
  const intern = new Intern(
    "Nate",
    12345,
    "haile.natnael@gmail.com",
    "Graceland University"
  );
  describe("Initialization", () => {
    it("verify 'Intern' object contents", () => {
      expect(intern.name).toEqual(expect.any(String));
      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.email).toEqual(expect.any(String));
      expect(intern.school).toEqual(expect.any(String));
    });
  });
  describe("intern function calls", () => {
    it("validates getGithub() function call", () => {
      expect(intern.getSchool()).toEqual(expect.any(String));
    });
    it("validates getRole() function call", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
