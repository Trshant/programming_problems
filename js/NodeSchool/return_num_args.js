var args = process.argv.slice(2) ;
//console.log( args );
argsn = args.map( Number );
//console.log( argsn );
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(argsn.reduce(reducer, 0));