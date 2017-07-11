
const Chromy = require('chromy');

async function main () {
  let chromy = new Chromy()
  await chromy.goto('http://example.com/')
  const result = await chromy.evaluate(() => {
          return document.querySelectorAll('*').length
        });
  await chromy.close();
  return result;
}



describe('get the length of a web page', () => {
  test('the length should be 13', async () => {
    var result = await main();
    expect(result).toBe(13);
  });
});
