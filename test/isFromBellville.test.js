describe('The isFromBellville function', function(){

    it('returns true if a registration number is for Bellville', function(){
        assert.equal(isFromBellville('CY'), true);

});
    it('otherwise return false', function(){
       assert.equal(isFromBellville('CJ'), false);

});
});