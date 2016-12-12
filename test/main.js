/* vim: ts=4:sw=4 */
mocha.setup("bdd");
window.assert = chai.assert;

require('./helpers_test.js');
require('./crypto_test.js');
