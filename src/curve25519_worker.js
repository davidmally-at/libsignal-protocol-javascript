var CurveWrapper = require('./curve25519_wrapper2.js')
// I am the worker

module.exports = function (self) {
  self.onmessage = function(e) {
    console.log('worker message!', e)
    CurveWrapper.curve25519_async[e.data.methodName].apply(null, e.data.args).then(function(result) {
      console.log('worker result!!!', result)
      self.postMessage({ id: e.data.id, result: result });
    }).catch(function(error) {
      console.log("worker err?", error)
      self.postMessage({ id: e.data.id, error: error.message });
    });
  };
}
