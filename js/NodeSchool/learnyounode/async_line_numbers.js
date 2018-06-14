var fs = require("fs");
var file = process.argv[2];
var file_content = fs.readFile(file , 'utf8' , function( err , data ){ console.log(data.split("\n").length -1 ); } ) ;
//var number_of_lines = file_content.split("\n").length - 1;
//console.log( number_of_lines);