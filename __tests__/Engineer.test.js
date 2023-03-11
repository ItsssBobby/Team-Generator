const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    // First test for '.isPalindrome()'
    it("should accept a name argument", () => {
    const github = "ItsssBobby";
    
    const result = new Engineer("robert", 666, "email", github)
    
    expect(result.github).toBe(github);
    })
    });