app.controller("WelcomeController", ["$scope", "UserService", "SEOService",
    function ($scope, UserService, SEOService) {

        $scope.getStarted = function () {
            window.location.pathname = "/createAccount1";
        }
        $scope.logout = function () {
            UserService.logout();
            window.location.pathname = "/home";
        };
        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        });
    }
])