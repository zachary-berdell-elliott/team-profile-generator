const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can set a GitHub profile based on a constructor", () => {
        const githubName = "github";
        const empGithub = new Engineer("name", 1, "email@example.com", githubName);
        expect(empGithub.github).toEqual(githubName);
    });

    it("Should have getRole() return \"Engineer\"", () => {
        const role = "Engineer";
        const empRole = new Engineer("name", 1, "email@example.com", "githubName");
        expect(empRole.getRole()).toEqual(role);
    });
});