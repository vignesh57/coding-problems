function flattenDictionary(dict){
 let result = {};
 let flattenDictionaryRecursive = function(k, dict){
     for(key in dict){
      let fullKey = (k && k.length >0) ? (k + "." + key) : key;
      if(typeof dict[key] === 'object')
           flattenDictionaryRecursive(fullKey, dict[key]);
      else result[fullKey] = dict[key];  
      }
      return result;
  }
 return  flattenDictionaryRecursive("",dict) ;
}

/*Let's test our code*/
var input = {
      "Key1" : "1",
      "Key2" : {
          "a" : "2",
          "b" : "3",
          "c" : {
              "d" : "3",
              "e" : {
                  "" : "1"
              }
          }
      }
};
console.log(flattenDictionary(input)); 
