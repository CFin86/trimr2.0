app.controller('stylistDEMOPAGEController', ["$scope", 'User','UserService', "SEOService", "$stateParams",
    function ($scope, User, UserService, SEOService) {
        // UserService.requireStylist();
        UserService.isLoggedIn();
        $scope.user = User.query();
        // $scope.role = User.query({
        //     role: $location.role
        // });
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