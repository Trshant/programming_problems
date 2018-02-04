#include <bits/stdc++.h>


using namespace std;

long long int f( long long int k , long long int n ){
    long long int sum = 0;
    if( n<=k ){
    	return 1;
    } 
    for ( long long int i = 1; i <= n; i += 1) {
    	sum += i;
        i *= k;
    }
    return sum;
}

long long int simplestSum(long long int k, long long int a, long long int b) {
    // Complete this function
    long long int sum = 0 ;
    for ( long long int i=a ; i<=b ; i += 1 ){
        sum += f( k , i );
    }
    return sum ;
}

int main() {
    long long int q;
    cin >> q;
    for(long long int a0 = 0; a0 < q; a0++){
        long long int k;
        long long int a;
        long long int b;
        cin >> k >> a >> b;
        long long int result = simplestSum(k, a, b);
        cout << result << endl;
    }
    return 0;
}
