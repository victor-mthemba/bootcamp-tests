describe('The yearsAgo function', function(){

    it('takes in a year and return how many years ago that was', function(){

        assert.equal(yearsAgo(1997), yearsago);

});

  it('takes in a year and return how many years ago that was if it is the current year returns zero', function(){

    assert.equal(yearsAgo(2019), 0);

});
})
