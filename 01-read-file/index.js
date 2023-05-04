const fs = require('fs');

const { stdout } = process;

const readStream = fs.createReadStream('./01-read-file/text.txt', 'utf8');

readStream.on('data', (chunk) => {
  stdout.write(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
  stdout.write('Finished reading data.');
});

readStream.on('error', (err) => {
  stdout.write(`Error occurred: ${err}`);
});

fs.readFile('./01-read-file/text.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  stdout.write(data);
});
