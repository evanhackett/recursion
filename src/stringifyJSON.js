// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  if (obj === null) return 'null';
  if (typeof obj === 'string') return '"' + obj + '"';
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
  if (typeof obj === 'function' || typeof obj === 'undefined') return '';
   
  
  if (Array.isArray(obj)) {
    var string = '';
    for (var i = 0; i < obj.length; i++) {
      if (i < obj.length - 1) string += stringifyJSON(obj[i]) + ',';
      else string += stringifyJSON(obj[i]);
    }
    result = '[' + string + ']';
  }
  else {
    for(var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') continue;
      result += (stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',');
    }
    result = '{' + result.slice(0, -1) + '}';
  }


  return result;
};
