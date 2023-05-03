/* const { stdin, stdout } = process;

stdout.write("Как тебя зовут?\n");
stdin.on("data", (data) => {
  stdout.write("Привет, ");
  stdout.write(data);
  process.exit();
});
process.on("exit", () => stdout.write("Удачи!"));
*/

/* function getValue(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue("-m");
console.log(message); */

console.log(__dirname);
console.log(__filename);
