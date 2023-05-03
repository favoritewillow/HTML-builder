const fs = require("fs");

const { stdout } = process;

fs.readFile("./01-read-file/text.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  stdout.write(data);
});
