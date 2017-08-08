app.controller('clientsViewController', ["$scope", "$location", 'UserService', "User", "SEOService", "$stateParams",
    function ($scope, $location, UserService, User, SEOService) {
        UserService.requireLogin();
        UserService.requireUser();
        $scope.user = User.query();
        $scope.role = User.query({   role: $location.role });
        console.log($scope.role);
        
        $scope.logout = function () {
            UserService.logout();
            window.location.pathname = "/";
        };
        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        });
    }
])