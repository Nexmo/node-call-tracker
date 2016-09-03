var Nexmo = require('nexmo');
var fs = require('fs');

/**
 *
 */
function CallTracker(config) {
  this.config = config;

  this.nexmo = new Nexmo({
      apiKey: this.config.nexmoApiKey, 
      apiSecret: this.config.nexmoApiSecret
    },
    {debug: true}
  );
  
  this.trackedCalls = {};
}

/**
 * Build an NCCO that tracks and proxies a call.
 */
CallTracker.prototype.answer = function (from, to) {
  var ncco = [];
  
  if(!this.trackedCalls[to]) {
    this.trackedCalls[to] = [];
  }
  this.trackedCalls[to].push(from);
  
  var connectAction = {
    action: 'connect',
    from: from,
    endpoint: [{
      type: 'phone',
      number: this.config.proxyToNumber
    }]
  };
  ncco.push(connectAction);
  
  return ncco;
};

module.exports = CallTracker;
