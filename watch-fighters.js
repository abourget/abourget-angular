(function () {
"use strict";

angular.module('watchFighers', [])

  .directive('setIf', [function () {
    return {
      transclude: 'element',
      priority: 1000,
      terminal: true,
      restrict: 'A',
      compile: function (element, attr, linker) {
        return function (scope, iterStartElement, attr) {
          iterStartElement[0].doNotMove = true;
          var expression = attr.setIf;
          var value = scope.$eval(expression);
          if (value) {
            linker(scope, function (clone) {
              iterStartElement.after(clone);
            });
          }
        };
      }
    };
  }])


  .directive('setHtml', function() {
    return {
      restrict: "A",
      priority: 100,
      link: function($scope, $el, $attr) {
        $($el).html($scope.$eval($attr.setHtml));
      }
    };
  })

  .directive('setText', function() {
    return {
      restrict: "A",
      priority: 100,
      link: function($scope, $el, $attr) {
        $($el).text($scope.$eval($attr.setText));
      }
    };
  })

  .directive('setClass', function() {
    return {
      restrict: "A",
      priority: 100,
      link: function($scope, $el, $attr) {
        $($el).addClass($scope.$eval($attr.setClass));
      }
    };
  })

  .directive('setTitle', function() {
    return {
      restrict: "A",
      priority: 100,
      link: function($scope, $el, $attr) {
        $($el).attr('title', $scope.$eval($attr.setTitle));
      }
    };
  })

  .directive('setHref', function() {
    return {
      restrict: "A",
      priority: 100,
      link: function($scope, $el, $attr) {
        $($el).attr('href', $scope.$eval($attr.setHref));
      }
    };
  })

  ;

})();