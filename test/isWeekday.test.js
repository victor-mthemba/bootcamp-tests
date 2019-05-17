describe('The isWeekday function', function(){

  it('returns true if it is a day of the week', function(){
      assert.equal(isWeekday('Monday'), true);

});
  it('otherwise return false if it is not  a day of the week', function(){
     assert.equal(isFromBellville('Sunday'), false);

});
});