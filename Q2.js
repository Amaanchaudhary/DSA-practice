function doesKeyExist(obj, key){
    if(obj[key]){
        return true
    }else{
        return false
    }
   
}


var obj = {name: 'John', age: 25, city: 'New York'}, key = 'age';

console.log(doesKeyExist(obj, key))