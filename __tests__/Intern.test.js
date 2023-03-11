const Intern = require('../lib/intern')

describe("Intern", () => {

    it("should accept a name argument", () => {
    const school = "UNCC";
    
    const result = new Intern("robert", 666, "email", school)
    
    expect(result.school).toBe(school);
    })
    it("getSchool should return school", () => {
        const school = "UNCC";
        
        const result = new Intern("robert", 666, "email", school)
        
        expect(result.getSchool()).toBe(school);
        });

        it("getRole should return Intern", () => {
            const role = "Intern";
            
            const result = new Intern("robert", 666, "email", "UNCC", role)
            
            expect(result.getRole()).toBe(role);
            });
    });