app.controller('NewUserController', ["$scope", "SEOService", "$stateParams",
    function ($scope, SEOService, $stateParams) {
        // this controls the button from createAccount1 
        $scope.getTrimrd = function () {
            window.location.pathname = "/createAccount2";
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