
var f_res = {};

function f(k, n) {
    var sum = 0;

    if( f_res['a'+k+'_'+n] ){
        return f_res['a'+k+'_'+n]
    }

    if( n<=k ){
    	return 1;
    } 
    for ( var i = 1; i <= n; i += 1) {
    	sum += i;
        i *= k;
    }

    f_res['a'+k+'_'+n] = sum ;
    return f_res['a'+k+'_'+n] ;
}



function simplestSum(k,a,b){
    //console.log( k , a , b );
    var sum = 0 ;
    for ( var i=a ; i<=b ; i += 1 ){
        /* console.log( k , i , a ,  b );
        console.log(f( k , i ));
         */
        sum += f( k , i );
        //console.log( sum );
    }
    return sum % ( 10e9 + 7 ) ;
}

console.log( simplestSum( 2 , 1 , 5 ) )

//console.log( (10e9+9) % ( 10e9 + 7 ) )
