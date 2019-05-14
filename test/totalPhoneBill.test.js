describe('The totalPhoneBill function', function(){

    it('takes in a string calls made and sms sent. Calculate the total bill for the data provided.', function(){
        assert.equal(totalPhoneBill(strings), finalCost);
  
  });
  });