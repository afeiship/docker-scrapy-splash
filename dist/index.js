/*!
 * name: @jswork/next-cookie-fetch
 * description: Node fetch meet cookie.
 * homepage: https://github.com/afeiship/next-cookie-fetch
 * version: 1.0.0
 * date: 2020-11-22 17:45:32
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nodeFetch = require('node-fetch');
  var tough = require('tough-cookie');
  var fetch = require('fetch-cookie')(nodeFetch, new tough.CookieJar());

  nx.cookieFetch = fetch;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.cookieFetch;
  }
})();
