var countRegNumber = function(str) {

    var regNumber = str.split(",");
    return regNumber.length;
    
  }
  var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
  //assert.equal(regCount, 3);