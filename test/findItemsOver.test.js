describe('The findItemsOver function', function(){

  it('should return products that have quantity higher than the threshold which is second paremeter.', function(){
      assert.deepEqual(findItemsOver([{"name":"bananas","qty":19},{"name":"apples","qty":37}], 20), [{"name":"apples","qty":37}]);

});
});