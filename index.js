function test () {
    var sub_array = [];
    var super_array = [];
    for (var i = 0; i <= 9; i++) {
        sub_array.push(i);
        super_array.push(sub_array.slice(0));
    }
    alert(super_array);
}



for (var x=0; x<=100; x++) {
    if (x === 0) {
        console.log(x + "is even");
    }
    else if (x % 2 === 0) {
        console.log(x + "is even");
    }
    else {
        console.log(x + "is odd");
    }
    print console.log if "is even";
}

var arr = [], 
    fruits = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'],
    label = 'Fruits';

arr = fruits.map(function (a) {
    return { data: a, label: label };
});

document.write('<pre>' + JSON.stringify(arr, 0, 4) + '</pre>');