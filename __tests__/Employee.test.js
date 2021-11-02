const Employee = require("../lib/Employee");

describe("Employee", () => {
    //Test for name entry
    describe("Name", () => {
        it("Can set a name based on the arguments of the constructor", () => {
            const name = "Test Name";
            const empName = new Employee(name);
            expect(empName.name).toEqual(name);
        });
    });

    describe("id", () => {
        it("Can set an id through the constructor arguments", () => {
            const idValue = 16;
            const empId = new Employee("name", idValue);
            expect(empId.id).toEqual(idValue);
        });
    });

    describe("Email", () => {
        it("Can set an email through the constructor arguments");
        const email = "name@example.com";
        const empEmail = new Employee("name", 1, email);
        expect(empEmail.email).toEqual(email);
    });
});