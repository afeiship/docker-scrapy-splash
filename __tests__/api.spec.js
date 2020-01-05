const nx = require('@feizheng/next-js-core2');
require('../src/next-cookie-fetch');

describe('api.basic test', () => {
  test('nx.cookieFetch', function() {
    const obj1 = { name: 'fei' };
    const obj2 = { email: '1290657123@qq.com' };
    const result = {};
    nx.cookieFetch(result, obj1, obj2);
    expect(result.name, obj1.name).toBe(null);
  });
});
