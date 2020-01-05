/*!
 * name: @feizheng/next-cookie-fetch
 * description: Node fetch meet cookie.
 * url: https://github.com/afeiship/next-cookie-fetch
 * version: 1.0.0
 * date: 2020-01-05 20:40:02
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nodeFetch = require('node-fetch');
  var tough = require('tough-cookie');
  var fetch = require('fetch-cookie')(nodeFetch, new tough.CookieJar());;

  nx.cookieFetch = fetch;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.cookieFetch;
  }
})();

//# sourceMappingURL=next-cookie-fetch.js.map
