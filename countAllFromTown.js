var countAllFromTown = function(str) {
    var list = str.split(",");
    var fromStellies = [];
    
    for(var i = 0; i < list.length; i++)
    {
      var item = list[i];
      if(item.startsWith("CL")) {
        fromStellies.push(item);
      }  
    }
    return fromStellies.length;
}

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
var howmany = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341');