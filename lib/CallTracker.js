/**
 * Create a new instance of a CallTracker.
 *
 * @param {Object} config - CallTracker configuration.
 */
function CallTracker(config) {
  this.config = config;
  
  this.trackedCalls = {};
}

/**
 * Track the call and return an NCCO that proxies a call.
 */
CallTracker.prototype.answer = function (from, to) {
  if(!this.trackedCalls[to]) {
    this.trackedCalls[to] = [];
  }
  this.trackedCalls[to].push({timestamp: Date.now(), from: from});
  
  var ncco = [];
  
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
