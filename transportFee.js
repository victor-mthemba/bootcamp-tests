var transportFee = function(shift) {
    if(shift === 'morning') {
      return 'R20';
    }
    else if(shift === 'afternoon') {
      return 'R10';
    }
    else {
      return 'free';
    }
  }