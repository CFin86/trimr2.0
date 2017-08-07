app.controller('clientsViewController', ["$scope", 'UserService', "User", "SEOService", "$stateParams",
    function ($scope, UserService, User, SEOService) {
        // UserService.requireLogin();
        // $scope.user = User.query();
        // console.log(firstname);
        
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