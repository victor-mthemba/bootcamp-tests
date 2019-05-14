describe('The regCheck function', function(){

    it('should return true if registration plate is For GP', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);

});
    it('otherwise return false', function(){
       assert.equal(regCheck('DV 23 LP MP', 'GP'), false);

});
});