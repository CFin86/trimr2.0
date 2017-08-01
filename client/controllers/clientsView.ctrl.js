app.controller('clientsViewController', ["$scope", 'UserService', "SEOService", "$stateParams",
    function ($scope, UserService, SEOService) {

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