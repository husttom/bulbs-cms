'use strict';

angular.module('customSearch.directive', [
  'bulbsCmsApp.settings',
  'customSearch.contentItem',
  'customSearch.service',
  'customSearch.simpleContentSearch',
  'customSearch.query'
])
  .directive('customSearch', function (routes) {
    return {
      controller: function ($scope, CustomSearchService) {
        $scope.customSearchService = new CustomSearchService($scope.searchQueryData);

        $scope.customSearchService.$retrieveContent();

        $scope.addedFilterOn = false;
        $scope.removedFilterOn = false;

        var updateQueryData = function () {
          $scope.searchQueryData = $scope.customSearchService.asQueryData();
        };

        $scope.resetFilters = function () {
          $scope.customSearchService.page = 1;
          $scope.customSearchService.query = '';
          $scope.addedFilterOn = false;
          $scope.removedFilterOn = false;
        };

        $scope.$conditionalContentRetrieve = function () {
          var promise;
          if ($scope.addedFilterOn) {
            // included filter is on, use retrieval by included
            promise = $scope.customSearchService.$filterContentByIncluded();
          } else if ($scope.removedFilterOn) {
            // excluded filter is on, use retrieval by excluded
            promise = $scope.customSearchService.$filterContentByExcluded();
          } else {
            // no query entered, any request should go to page one
            promise = $scope.customSearchService.$retrieveContent();
          }

          return promise.then(updateQueryData);
        };

        $scope.$contentRetrieve = function () {
          return $scope.customSearchService.$retrieveContent()
            .then(updateQueryData);
        };
      },
      restrict: 'E',
      scope: {
        searchQueryData: '='
      },
      templateUrl: routes.COMPONENTS_URL + 'custom-search/custom-search.html'
    };
  });
