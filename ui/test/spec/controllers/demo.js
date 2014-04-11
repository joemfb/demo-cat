'use strict';

describe('Controller: DemoCtrl', function () {
  var $httpBackend, $rootScope, $scope, createController;
  
  var demoModel = 
    {
      name: '',
      description: '',
      host: '',
      hostType: 'internal',
      browsers: [],
      features: [],
      languages: [],
      comments: []
    };
    
  beforeEach(function() {
    module('demoCat');
  });
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET','/v1/documents?format=json').respond(200,demoModel,{'Content-Type':'application/json'});
    // Get hold of a scope (i.e. the root scope)
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    // The $controller service is used to create instances of controllers
    var $controller = $injector.get('$controller');
 
    createController = function() {
      return $controller('DemoCtrl', {'$scope' : $scope });
    };
  }));

//  afterEach(function() {
//    $httpBackend.verifyNoOutstandingExpectation();
//    $httpBackend.verifyNoOutstandingRequest();
//  });
  

  it('should add comment', function() {
    // backend definition for adding comment
    $httpBackend.when('PUT', '/v1/resources/comment').respond(function(method,url,data) { return [200,data,{'Content-Type':'application/json'}]; });
    createController();
    $httpBackend.flush();
    $scope.addComment({'msg':'This was a great demo'});
    $httpBackend.flush();
    expect($scope.model.demo.comments.length).toBe(1);
    expect($scope.model.demo.comments[0].msg).toBe('This was a great demo');
    //testing adding a second comment
    $scope.addComment({'msg':'This demo was even better than the first time'});
    $httpBackend.flush();
    expect($scope.model.demo.comments.length).toBe(2);
    expect($scope.model.demo.comments[1].msg).toBe('This demo was even better than the first time');
  });
});
