describe('The isWeekday function', function(){

  it('returns true if it is a day of the week', function(){
      assert.equal(isWeekday('Mounday'), true);

});
  it('otherwise return false', function(){
     assert.equal(isFromBellville('Sunday'), false);

});
});