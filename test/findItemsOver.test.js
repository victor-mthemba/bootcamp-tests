describe('The findItemsOver function', function(){

  it('should return products that have quantity higher than the threshold which is second paremeter.', function(){
      assert.deepEqual(findItemsOver([{"name":"bananas","qty":19},{"name":"apples","qty":37}], 20), [{"name":"apples","qty":37}]);

});

it('should return an empty  array if no product has a greater then threshold qty.', function(){
  assert.deepEqual(findItemsOver([{"name":"bananas","qty":19},{"name":"apples","qty":20}], 20), []);

});
});