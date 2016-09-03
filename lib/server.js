var app = require('express')();
var config = require('../config');

app.set('port', (config.port || 5000));
app.use(require('body-parser').json());

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});

var CallTracker = require('./CallTracker');
var callTracker = new CallTracker(config);

/**
 * Handle voice event webhooks
 */
app.post('/event', function(req, res) {
  console.log(req.body);
});

/**
 * Webhook endpoint to handle a call being answered.
 * Return an NCCO to record a call and proxy it to another number.
 */
app.get('/answer', function(req, res) {
  var from = req.query.from;
  var to = req.query.to;
  
  var ncco = callTracker.answer(from, to);
  return res.json(ncco);
});

// Helper routes

/**
 * Serve the index view
 */
app.get('/', function(req, res) {
  res.send('Hello Nexmo');
});

app.get('/tracked-calls', function(req, res) {
  res.json(callTracker.trackedCalls);
});
