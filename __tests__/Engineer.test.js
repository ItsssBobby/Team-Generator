const Engineer = require('../lib/engineer')

describe("Engineer", () => {

    it("should accept a name argument", () => {
    const github = "ItsssBobby";
    
    const result = new Engineer("robert", 666, "email", github)
    
    expect(result.github).toBe(github);
    })
    it("getGithub should return github", () => {
        const github = "github";
        
        const result = new Engineer("robert", 666, "email", github)
        
        expect(result.getGithub()).toBe(github);
        });

        it("getRole should return Engineer", () => {
            const role = "Engineer";
            
            const result = new Engineer("robert", 666, "email", "github", role)
            
            expect(result.getRole()).toBe(role);
            });
    });