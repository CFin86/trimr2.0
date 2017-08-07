app.controller("LoginController", ['$scope', 'User', "$location", "UserService", "SEOService",
    function ($scope, User, $location, UserService, SEOService) {
        UserService.me().then(function (me) {
            redirect();

        });
        $scope.home = function () {
            window.location.pathname = "/";
        }
        $scope.login = function () {
            UserService.login($scope.email, $scope.password).then(function () {
                // console.log(user.role);
                redirect();
            }, function (err) {
                console.log(err);
            });
        };
        
        $scope.stylistlogin = function () {
            window.location.pathname = "/stylistdashboard";
        }

        function redirect() {
            var dest = $location.search().p;
            if (!dest) {
                dest = '/'
            };
            $location.path(dest).search('p', null).replace();
            // if ($scope.user.role === "user") {
            //     location.assign("/");
            // }
            // if ($scope.user.role === "stylist") {
            //     location.assign("/stylist");;
            // }
        };

        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        })
    }
])