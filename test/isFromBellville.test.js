describe('The isFromBellville function', function(){

    it('returns true if a registration number is for Bellville', function(){
        assert.equal(isFromBellville('CY'), true);

});
    it('if not for Bellville return false', function(){
       assert.equal(isFromBellville('CJ'), false);

});
});