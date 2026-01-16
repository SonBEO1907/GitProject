let value = 10;
let numbers = [-3, 5, 1, 3, 2, 10];

numbers.sort(function(a,b){
    return a - b;
});

let start = 0;
let end = numbers.length - 1;

while (start <= end){
    mid = Math.floor((start + end) / 2);

    if (numbers[mid] === value){
        console.log("true");
        return;
    } else if (value < numbers[mid]){
        end = mid -1;
    } else {
        start = mid +1;
    }
}
console.log("false");
return -1;