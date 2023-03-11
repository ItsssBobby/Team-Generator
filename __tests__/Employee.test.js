const Employee = require('../lib/employee')

describe("Employee", () => {

    it("should accept a name argument", () => {
    const name = "robert";
    
    const result = new Employee(name)
    
    expect(result.name).toBe(name);
    });

    it("accept an id", () => {
    const id = 666;
    
    const result = new Employee("robert", id)
    
    expect(result.id).toBe(id);
    });

    it("accept an email", () => {
        const email = "email";
        
        const result = new Employee("robert", 666, email)
        
        expect(result.email).toBe(email);
        });

        it("getName should return a name", () => {
            const name = "robert";
            
            const result = new Employee(name)
            
            expect(result.getName()).toBe(name);
            });

            it("getId should return id", () => {
            const id = 666;
            
            const result = new Employee("robert", id)
            
            expect(result.getId()).toBe(id);
            });
        
            it("getEmail should return email", () => {
                const email = "email";
                
                const result = new Employee("robert", 666, email)
                
                expect(result.getEmail()).toBe(email);
                });

                it("getRole should return employee", () => {
                    const role = "Employee";
                    
                    const result = new Employee("robert", 666, "email", role)
                    
                    expect(result.getRole()).toBe(role);
                    });
    });