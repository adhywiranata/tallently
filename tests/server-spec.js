const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);


describe('Blobs', () => {
  it('SUITE 1: should list ALL contacts on /api/contacts GET in JSON format', (done) => {
    chai.request(server)
      .get('/api/contacts')
      .end((err, res) => {
        res.should.have.status(200);
        res.type.should.equal('application/json');
        done();
      });
  });
  it('should list a SINGLE blob on /blob/<id> GET');
  it('should add a SINGLE blob on /blobs POST');
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
});
