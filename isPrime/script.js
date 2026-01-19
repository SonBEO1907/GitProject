function checkPrime(n){

    const isPrime = new Uint8Array(n+1).fill(1);
    isPrime[0] = isPrime[1] = 0;

    const limit = Math.sqrt(n);

    for (let i = 2; i <= limit; i++){
        for (let j = i*i; j <=n; j +=i){
            isPrime[j] = 0;
        }
    }

    const primeArr = [];
    for (let i = 2; i <=n; i++){
        if (isPrime[i]) primeArr.push(i);
    }
    return primeArr;
}

result = checkPrime(10000);

console.log( result[0] );