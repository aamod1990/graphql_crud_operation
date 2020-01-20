var app = require('./v2.js');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const _ = require('lodash');

const helloWords = require('./testCaseVariabies');
let testCasesList = [helloWords]
chai.use(chaiHttp);
const expectedStatus = 200;
var requestCon;


describe('hello', function(){
    beforeEach(function(done){
        requestCon = chai.request(app).post('/graphql');
        // Setting headers for the request
        requestCon.set("Content-Type", "application/json");
        requestCon.set("authorization", "tokennumberhere");
        done();
    });

    _.forEach(testCasesList, function(currentTest){
        console.log("currentTestcurrentTest",currentTest);
        it(currentTest.testCaseTitle, function(done) {
            requestCon.send({query: currentTest.inputQuery});
            requestCon.end(function(err, res) {
                console.log("sdfdsffffffffffffffffffff",res.body,"111111111111",err);
                expect(err).to.be.null;
                expect(res.body).to.be.deep.equal(currentTest.expectedResponse);
                expect(res).to.have.status(expectedStatus);
                done();
            });
        });
    });
  
  });
