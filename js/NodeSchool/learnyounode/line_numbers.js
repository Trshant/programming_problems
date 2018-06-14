var fs = require("fs");
var file = process.argv[2];
var file_content_buffer = fs.readFileSync(file) ;
var number_of_lines = file_content_buffer.toString().split("\n").length - 1;
console.log( number_of_lines);