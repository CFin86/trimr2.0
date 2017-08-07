app.controller("StylistLoginController", ['$scope','User',
            function ($scope, User){
                 $scope.stylistlogin = function () {
                window.location.pathname = "/stylistdashboard";
                }    }
        
        ]);