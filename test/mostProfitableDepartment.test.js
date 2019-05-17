describe('The mostProfitableDepartment function', function(){

    it('returns the most profitable department.', function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"carpentry","sales":8009,"day":"Wednesday"},{"department":"hardware","sales":12000,"day":"Thursday"}]), "hardware");

});
})