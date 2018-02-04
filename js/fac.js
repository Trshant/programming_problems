
facc = [] ;
facc[0] = 1 ;
function fac(num ){
	

	if( !facc[num] ){
		facc[num] = num * fac(num-1 )
	} 

	
	return facc[num]
}

finalnum = 5;

num = fac(finalnum );
console.log( num );


fibc = [] ;
fibc[0] = 1 ;
fibc[1] = 1 ;
function fib(num ){
	

	if( !fibc[num] ){
		fibc[num] = fib( num-1 ) + fib( num-2 )
	}

	
	return fibc[num]
}

finalnum = 20;
num = fib(finalnum );
console.log( fibc );
console.log( num );