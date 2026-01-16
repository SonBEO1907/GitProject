let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length - 1;
while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}

for (let number in x){
    console.log("Index: " + number)
    console.log("Value: " + x[number]);
}