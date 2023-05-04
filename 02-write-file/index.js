const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;

fs.writeFile(
  path.join(__dirname, 'texts.txt'),
  'Hello! How are you?\n',
  (err) => {
    if (err) throw err;
  },
);

fs.readFile('./02-write-file/texts.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  stdout.write(data);
});

const filename = 'texts.txt';
const filepath = path.join(__dirname, filename);

fs.writeFile(filepath, '', (err) => {
  if (err) throw err;

  stdin.setEncoding('utf8');
  stdin.on('data', (input) => {
    if (input.trim() === 'exit') {
      stdout.write('Thank you!\n');
      process.exit();
    }

    fs.appendFile(filepath, input, (error) => {
      if (error) throw err;

      stdout.write(`"${input.trim()}" успешно записано в ${filename}\n`);
      stdout.write('Введите текст:\n');
    });
  });
});
