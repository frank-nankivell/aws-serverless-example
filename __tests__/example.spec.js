const lambda = require("../functions/example.js");

describe("tests", () => {
  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });
  it("should succeed with GET request", async () => {
    const event = { httpMethod: "GET" };
    const expectedStatusCode = 200;
    const result = await lambda.handler(event);
    expect(result.statusCode).toBe(expectedStatusCode);
  });
});
