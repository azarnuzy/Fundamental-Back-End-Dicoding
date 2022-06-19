const fs = require('fs');

//synchronous
const fileReadCallback = (error, data) => {
  if (error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};
fs.readFile('todo.txt', 'utf-8', fileReadCallback);

//asynchronous
const data = fs.readFileSync('todo.txt', 'utf-8');
console.log(data);
