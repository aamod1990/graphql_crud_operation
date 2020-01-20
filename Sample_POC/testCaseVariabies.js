const testCaseTitle ="This is simple hello word";

const inputQuery = `{hello}`;

const expectedResponse = {
    data: {
      hello: "Hello world!"
    }
  };

module.exports.testCaseTitle = testCaseTitle;
module.exports.inputQuery = inputQuery;
module.exports.expectedResponse = expectedResponse;