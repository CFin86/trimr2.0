app.controller('NewUserController', ["$scope", "User", "SEOService", "$stateParams",
    function ($scope, User, SEOService, $stateParams) {
        // this controls the button from createAccount1 
        $scope.user = User.query();
        console.log($scope.user);
        $scope.getTrimrd = function () {
            var u = new User($scope.newUser);
            u.$save(function () {
                $scope.newUser = {};
                $scope.user = User.query();
            });
            // window.location.pathname = "/createAccount2";
        }

        // this controls the button from createAccount2
        $scope.lookGreat = function () {
            window.location.pathname = "/createAccount3";
        }

        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        });
    }
])