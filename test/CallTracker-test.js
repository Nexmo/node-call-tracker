var CallTracker = require('../lib/CallTracker');
var config = require('./test-config');

var expect = require('expect.js');

describe('CallTracker', function () {
  
  var ct = new CallTracker(config);
  var from = '555';
  var to = '999';
  var ncco = ct.answer(from, to);

  it('should create an NCCO with one elements', function() {
    expect(ncco.length).to.be(1);
  });
  
  it('should create an NCCO with a connect first element', function() {
    var actionEl = ncco[0];
    expect(actionEl.action).to.be('connect');
  });
  
  it('should create an NCCO with a connect action with from value', function() {
    var actionEl = ncco[0];
    expect(actionEl.from).to.be(from);
  });
  
  it('should create an NCCO with a connect action with endpoint Array', function() {
    var actionEl = ncco[0];
    expect(actionEl['endpoint']).to.be.an('array');
    expect(actionEl['endpoint'].length).to.be(1);
  });
  
  it('should create an NCCO with a connect action with phone endpoint', function() {
    var actionEl = ncco[0];
    var endpoint = actionEl['endpoint'][0];
    expect(endpoint.type).to.be('phone');
    expect(endpoint.number).to.be(config.proxyToNumber);
  });
  
});
