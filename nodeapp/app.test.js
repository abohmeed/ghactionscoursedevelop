const greet = require("./app");

test("greets the user by name", () => {
    expect(greet("John")).toBe("Hello, John!");
});