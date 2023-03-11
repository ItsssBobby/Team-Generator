const Manager = require('../lib/manager')

describe("Manager", () => {

    it("should accept a name argument", () => {
    const officeNumber = 1;
    
    const result = new Manager("robert", 666, "email", officeNumber)
    
    expect(result.officeNumber).toBe(officeNumber);
    })
    it("getOfficeNumber should return officeNumber", () => {
        const officeNumber = 1;
        
        const result = new Manager("robert", 666, "email", officeNumber)
        
        expect(result.getOfficeNumber()).toBe(officeNumber);
        });

        it("getRole should return Manager", () => {
            const role = "Manager";
            
            const result = new Manager("robert", 666, "email", 1, role)
            
            expect(result.getRole()).toBe(role);
            });
    });