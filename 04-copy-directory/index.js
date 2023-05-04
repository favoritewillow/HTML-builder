const fs = require('fs');
const path = require('path');

const { stdout } = process;

const secretFolder = './04-copy-directory/files';

fs.mkdir(
  path.join(__dirname, 'files-copy'),
  { recursive: true },
  (mkdirErr) => {
    if (mkdirErr) throw mkdirErr;
    stdout.write('Папка была создана');

    fs.readdir(secretFolder, (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        const filePath = path.join(secretFolder, file);
        const copyFilePath = path.join(__dirname, 'files-copy', file);

        fs.copyFile(filePath, copyFilePath, (pathErr) => {
          if (pathErr) throw pathErr;
          stdout.write(`${file} был скопирован`);
        });
      });
    });
  },
);
