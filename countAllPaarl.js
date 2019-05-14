var countAllPaarl = function(string) {
  var list = string.split(", ");
  var paarl = []
  for(var i = 0; i < list.length; i++) {
    var item = list[i];
    if(item.startsWith("CJ")) {
       paarl.push(item);
    }
  }

  return paarl.length;
}
var string = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
var count = countAllPaarl(string);