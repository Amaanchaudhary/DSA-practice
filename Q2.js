function doesKeyExist(obj, key) {
    if (key in obj) {
        return true
    }
    return false
}

var obj = { name: 'John', age: 25, city: 'New York' }, key = 'age';
console.log(doesKeyExist(obj, key))
