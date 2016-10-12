var arr = [0, 1, 2];

function Ref(arr, idx) {
    return function(num) {
        if(arguments.length == 0) {
            return arr[idx];
        }
        arr[idx] = num;
    };
}

var x = Ref(arr, 0); // x가 arr 배열요소의 0번째 인덱스를 가리키게 한다.

console.log(x()); // 0이 출력됨 (인자에 아무것도 안주면, 현재 x가 가리키는 값을 출력.)

x(5); // 인자에 값을 주면, 현재 x가 가리키는 값을 변경한다.

console.log(arr); // [5, 1, 2]

// arr 배열의 값을 하나씩 증가시킨다.
for(var i = 0; i < arr.length ; i++) {
    var current_val = Ref(arr, i)();
    Ref(arr, i)(current_val + 1);
}

console.log(arr); // [6, 2, 3]
