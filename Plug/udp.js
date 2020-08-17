const dgram = require('dgram');
const message = Buffer.from('1,2,3,4,5,6');
const client = dgram.createSocket('udp4');
client.send(message, 12346, '127.0.0.1', (err) => {
    client.close();
});