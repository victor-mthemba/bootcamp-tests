var totalPhoneBill = function(str) {
    var list = strings.split(", ");
    var NumbOfCalls = [];
    var NumbOfSms = [];
    
    for(var i = 0; i < list.length; i++) {
      var item = list[i];
      if(item.startsWith('c')) {
        NumbOfCalls.push(item);
      }
      else if(item.startsWith('s')) {
         NumbOfSms.push(item);     
      }
    }
     
    var totalBill = (2.75 * NumbOfCalls.length) + (0.65 * NumbOfSms.length);
    return 'R' + totalBill.toFixed(2);
    
  }

  var strings = "call, sms, call, sms, sms";
  var finalCost = totalPhoneBill(strings);