app.controller("LoginController", ['$scope', "User", "$location", "UserService", "SEOService",
    function ($scope, User, UserService, $location, SEOService) {
         $scope.User = User.query();
        UserService.me().then(function () {
            redirect();
        });
        console.log($scope.User);
        $scope.login = function () {
            UserService.login($scope.email, $scope.password)
                .then(function () {
                    redirect();
                }, function (err) {
                    console.log(err);
                });
        }

        function redirect() {
            var dest = $location.search().dest;
            if (!dest) {
                dest = '/';
            }
            $location.replace().path(dest).search('dest', null);
        }


        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        })
    }
])
