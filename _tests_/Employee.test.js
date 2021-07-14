const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("creates an employee object, and verifies the contents of employee object for valid input", () => {
      const employee = new Employee("Nate", 12345, "haile.natnael@gmail.com");
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
      const employee = new Employee("Nate", 12345, "haile.natnael@gmail.com");
      expect(employee.getName()).toEqual(expect.any(String));
    });
    it("validates getId() function call", () => {
      const employee = new Employee("Nate", 12345, "haile.natnael@gmail.com");
      expect(employee.getId()).toEqual(expect.any(Number));
    });
    it("validates getEmail() function call", () => {
      const employee = new Employee("Nate", 12345, "haile.natnael@gmail.com");
      expect(employee.getEmail()).toEqual(expect.any(String));
    });
    it("validates getRole() function call", () => {
      const employee = new Employee("Nate", 12345, "haile.natnael@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
