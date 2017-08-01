app.controller('stylistDEMOPAGEController', ["$scope", 'UserService', 'Post', "Category", "SEOService", "$stateParams",
    function ($scope, UserService, Post, Category, SEOService) {
        UserService.isLoggedIn();
            $scope.posts = Post.query();
            $scope.categories = Category.query();

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