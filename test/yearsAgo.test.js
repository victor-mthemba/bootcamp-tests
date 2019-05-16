describe('The yearsAgo function', function(){

    it('takes in a year and return how many years ago that was', function(){

        assert.equal(yearsAgo(1997), yearsago);

});

it('takes in a year and return zero if its the current year', function(){

    assert.equal(yearsAgo(2019), 0);

});
});
