app.controller("WelcomeController", ["$scope", "UserService", "User", "$location", "SEOService",
    function ($scope, UserService, User, $location, SEOService) {
        UserService.me().then(function (me) {
            redirect()
        });

        function redirect() {
            var dest = $location.search().p;
            if (!dest) {
                dest = '/clientdashboard'
            };
            $location.path(dest).search('p', null).replace();
            // if ($scope.user.role === "user") {
            //     location.assign("/");
            // }
            // if ($scope.user.role === "stylist") {
            //     location.assign("/stylist");;
            // }
        };

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