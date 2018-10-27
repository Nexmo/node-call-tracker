const CallTracker = require('../lib/CallTracker');
const config = require('./test-config');

const expect = require('expect.js');

describe('CallTracker', function () {
  
  let ct = new CallTracker(config);
  let from = '555';
  let to = '999';
  let ncco = ct.answer(from, to);

  it('should create an NCCO with one elements', function() {
    expect(ncco.length).to.be(1);
  });
  
  it('should create an NCCO with a connect first element', function() {
    let actionEl = ncco[0];
    expect(actionEl.action).to.be('connect');
  });
  
  it('should create an NCCO with a connect action with from value', function() {
    let actionEl = ncco[0];
    expect(actionEl.from).to.be(from);
  });
  
  it('should create an NCCO with a connect action with endpoint Array', function() {
    let actionEl = ncco[0];
    expect(actionEl['endpoint']).to.be.an('array');
    expect(actionEl['endpoint'].length).to.be(1);
  });
  
  it('should create an NCCO with a connect action with phone endpoint', function() {
    let actionEl = ncco[0];
    let endpoint = actionEl['endpoint'][0];
    expect(endpoint.type).to.be('phone');
    expect(endpoint.number).to.be(config.proxyToNumber);
  });
  
});
