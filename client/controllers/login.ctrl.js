app.controller("LoginController", ['$scope', 'User', "$location", "UserService", "SEOService",
    function ($scope, User, $location, UserService, SEOService) {
        UserService.me().then(function (me) {
            redirect();
        });

        $scope.home = function () {
            window.location.pathname = "/";
        }
        $scope.login = function () {
            $scope.user = User.query();
            UserService.login($scope.email, $scope.password).then(function () {
                redirect();
               // loginRedirect();
            }, function (err) {
                console.log(err);
            });
        };

        function redirect() {
            var dest = $location.search().p;
            if (!dest) {
                dest = '/clientdashboard'
            };
            $location.path(dest).search('p', null).replace();
        };

        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        })
    }
])