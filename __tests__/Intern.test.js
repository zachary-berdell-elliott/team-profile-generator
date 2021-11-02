const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Can set a school based on a constructor", () => {
        const school = "University of Denver";
        const empSchool = new Intern("name", 1, "email@example.com", school);
        expect(empSchool.school).toEqual(school);
    });

    it("Should have getrole() return \"Intern\"", () => {
        const role = "Intern";
        const empRole = new Intern("name", 1, "email@example.com", "school");
        expect(empRole.getRole()).toEqual(role);
    });
});