angular.module('TrimR.services', [])
    .service('UserService', ['$http', '$location', function ($http, $location) {
      var user;
        var role;

        this.isLoggedIn = function () {
            if (user) {
                return true;
            }
            return false;

        };
        this.isAdmin = function () {
            if (user.role === "admin") {
                return true;
            }
            return false;
        };
        this.requireLogin = function () {
            if (!this.isLoggedIn()) {
                var current = $location.path();
                $location.path('/login').search('p', current);
            }
        };
          this.requireAdmin = function () {
            if (!this.isAdmin()) {
                var current = $location.path();
                alert("You're not allowed!")
                window.location.pathname = "/";
            }
        };

   this.login = function (email, password) {
            return $http({
                method: "POST",
                url: "http://localhost:3000/api/users/login",
                data: { email: email, password: password}
            }).then(function (success) {
                user = success.data;
                return success.data;
            })
        }

        this.logout = function () {
            return $http({
                method: "GET",
                url: "http://localhost:3000/api/users/logout"
            }).then(function () {
                user = undefined;
            })
        }

        this.me = function () {
            if (user) {
                return Promise.resolve(user);
            }
            return $http({
                url: "http://localhost:3000/api/users/me"
            }).then(function (success) {
                user = success.data;
                return success.data;
            })
        };
    }])

    .service('SEOService', ['$rootScope', function ($rootScope) {
        this.setSEO = function (data) {
            $rootScope.seo = {};
            for (var p in data) {
                $rootScope.seo[p] = data[p];
            }
        }
    }]);