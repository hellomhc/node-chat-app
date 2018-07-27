var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Aaron';
    var text = 'Hello World!';
    var message = generateMessage(from, text);

    expect(message).toMatchObject({ from, text });
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correc location object', () => {
    var from = 'Aaron';
    var latitude = 35.4115073;
    var longitude = 129.1592152;
    var url = 'https://www.google.com/maps?q=35.4115073,129.1592152';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({ from, url });
    expect(typeof message.createdAt).toBe('number');
  });
});
