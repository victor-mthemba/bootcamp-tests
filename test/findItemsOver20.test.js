describe('The findItemsOver20 function', function(){

    it('return all the products that have a quantity higher than 20.', function(){
        assert.deepEqual(findItemsOver20([{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"bananas","qty":27}]);

});

it('return an empty  array if no item is over 20.', function(){
    assert.deepEqual(findItemsOver20([{"name":"bananas","qty":19},{"name":"apples","qty":3}]), []);

});
});