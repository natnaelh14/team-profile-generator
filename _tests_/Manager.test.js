//import Manager class
const Manager = require("../lib/Manager");
//Manager input test
describe("Manager", () => {
  const manager = new Manager("Bob", 12345, "haile.natnael@gmail.com", 12345)
  it("verify 'manager' object contents", () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
  it("manager function call", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});
