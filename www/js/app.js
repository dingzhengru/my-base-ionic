// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicApp = angular.module('app', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);

      // test
      // $cordovaPlugin.somefunction().then(function(success, error) {
      //   if(error)
      //       console.log('error: ' + error);
      //   else
      //       console.log('success: ' + success);
      // })
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

ionicApp.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

ionicApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: function($scope) {
                $scope.setTitle('Home');
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: function($scope) {
                $scope.setTitle('About');
            }
        })
    
    $urlRouterProvider.otherwise('/');
});

ionicApp.controller('MainController', function($scope, $http, $rootScope, $ionicPopover) {
    $scope.setTitle = function(title) {
        $scope.title = title;
    };
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.isObject = function(input) {
        return angular.isObject(input);
    };
    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i = i + step) {
            input.push(i);
        }
        return input;
    };

    $scope.popover;

    // ========================= Popover

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function($event, popover) {
        popover.show($event);
    };
    $scope.closePopover = function(popover) {
        popover.hide();
    };

    // ========================= Popover Event

    // Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action
    });
});