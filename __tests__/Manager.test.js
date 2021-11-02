const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Can set an office number based on a constructor", () => {
       const officeNumber = "12";
       const empOffice = new Manager("name", 1, "email@example.com", officeNumber);
       expect(empOffice.office).toEqual(officeNumber);
    });

    it("Should have getRole() return \"Manager\"", () => {
        const role = "Manager";
        const empRole = new Manager("name", 1, "email@example.com", 1);
        expect(empRole.getRole()).toEqual(role);
    });   
});