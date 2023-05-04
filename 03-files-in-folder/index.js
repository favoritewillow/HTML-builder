const { readdir, stat } = require('fs/promises');
const { join, extname } = require('path');

const secretFolder = './03-files-in-folder/secret-folder';

async function printFileInfo() {
  try {
    const files = await readdir(secretFolder, { withFileTypes: true });
    const promises = files.map(async (file) => {
      if (file.isFile()) {
        const { size: fileSizeInBytes } = await stat(
          join(secretFolder, file.name),
        );
        const fileName = (await file).name;
        const fileExtension = extname(fileName).slice(1);
        const fileSizeInKb = (fileSizeInBytes / 1024).toFixed(2);
        console.log(`${fileName} - ${fileExtension} - ${fileSizeInKb}kb`);
      } else if (file.isDirectory()) {
        const dirPath = `${secretFolder}/${file.name}`;
        const dirFiles = await readdir(dirPath, { withFileTypes: true });
        dirFiles.forEach(async (dirFile) => {
          if (dirFile.isFile()) {
            const { size: fileSizeInBytes } = await stat(
              join(dirPath, dirFile.name),
            );
            const fileName = (await dirFile).name;
            const fileExtension = extname(fileName).slice(1);
            const fileSizeInKb = (fileSizeInBytes / 1024).toFixed(2);
            console.log(`${fileName} - ${fileExtension} - ${fileSizeInKb}kb`);
          }
        });
      }
    });
    await Promise.all(promises);
  } catch (err) {
    console.error(err);
  }
}

printFileInfo();
