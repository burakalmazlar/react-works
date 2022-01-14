var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(a, b) {
    return a + b;
}
function printf(value) {
    console.log(value);
}
var result = add(2, 5);
printf(result);
var people;
people = [{ name: "Burak", age: 38 }];
printf(people);
var variable = "String";
variable = 123;
printf(variable);
var peoples = [];
peoples.push({ name: "Burak", age: 38 });
printf(peoples);
function insert(array, value) {
    return __spreadArray([value], array, true);
}
var arr = insert([1, 2], 0);
printf(arr);
