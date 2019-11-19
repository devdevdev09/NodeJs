// node argument.js test1 test2
console.log(process.argv[0]);    // argv[0] NODE_PATH\node.exe
console.log(process.argv[1]);    // argv[1] ARGUMENT.JS_PATH\arguments.js
console.log(process.argv[2]);    // argv[2] test1
console.log(process.argv[3]);    // argv[3] test2

console.log(process.argv0);      // == argv[0]
console.log(process.argv2);      // undefined