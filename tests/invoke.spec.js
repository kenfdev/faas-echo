const chakram = require('chakram');
const expect = chakram.expect;

const ENDPOINT = "http://localhost:8080/function/echo";

describe("FaaS echo function", () => {
    it("should respond with the data you passed", () => {
        // Arrange
        const expected = "echo test";

        // Act
        return chakram.post(ENDPOINT, expected, {json: false})
            .then(response => {
                // Assert
                expect(response).to.have.status(200);
                expect(response.body).to.contain(expected);
            });
    });
});