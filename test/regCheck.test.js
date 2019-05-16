describe('The regCheck function', function(){

    it('should return true if registration plate is For GP', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);

});
    it('should return false if plate is for MP', function(){
       assert.equal(regCheck('DV 23 LP MP', 'GP'), false);

});
});