app.controller('clientDEMOPAGEController', ["$scope", 'UserService', 'Post', "Category", "SEOService", "$stateParams",
    function ($scope, UserService, Post, Category, SEOService) {
        UserService.requireLogin();

        $scope.posts = Post.query();
        $scope.categories = Category.query();

        $scope.logout = function () {
            UserService.logout();
            window.location.pathname = "/home";
        };
        $scope.compose = function () {
            window.location.pathname = "/compose";
        };
        $scope.admin = function () {
            window.location.pathname = "/" + $scope.userid + "/user";
        };
        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        });
    }
])