//import Employee class
const Employee = require("../lib/Employee");
//Employee input test
describe("Employee", () => {
  const employee = new Employee("Nate", 12345, "haile.natnael@gmail.com");
  describe("Initialization", () => {
    it("verifies the contents of employee object for valid input", () => {
      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });
  describe("Function calls", () => {
    it("validates getName() function call", () => {
      expect(employee.getName()).toEqual(expect.any(String));
    });
    it("validates getId() function call", () => {
      expect(employee.getId()).toEqual(expect.any(Number));
    });
    it("validates getEmail() function call", () => {
      expect(employee.getEmail()).toEqual(expect.any(String));
    });
    it("validates getRole() function call", () => {
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
