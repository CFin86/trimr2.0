var app = angular.module("TrimR", ['ui.router', 'ngResource', "TrimR.factories", "TrimR.services"]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        'header': {
                            templateUrl: 'views/headers/header.html',
                            controller: 'HeaderController'
                        },
                        'content': {
                            templateUrl: 'views/welcome.html',
                            controller: 'WelcomeController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
                .state('login', {
                    url: '/login',
                    views: {
                        'content': {
                            templateUrl: 'views/login.html',
                            controller: 'LoginController'
                        }
                    }
                })
                .state('stylistdashboard', {
                    url: '/stylistdashboard',
                    views: {
                        'header': {
                            templateUrl: 'views/headers/header.html',
                            controller: 'HeaderController',
                            requiresLogin: true,
                            requiresAdmin: true
                        },
                        'content': {
                            templateUrl: '/views/stylist/stylistDEMOPAGE.html',
                            controller: 'stylistDEMOPAGEController',
                            requiresLogin: true,
                            requiresAdmin: true
                        },
                        'footer': {
                            templateUrl: 'views/footer.html',
                            requiresLogin: true,
                            requiresAdmin: true
                        }
                    }
                })
                .state('clientDashboard', {
                    url: '/clientdashboard',
                    views: {
                        'header': {
                            templateUrl: 'views/headers/header.html',
                            controller: 'HeaderController'
                        },
                        'content': {
                            templateUrl: '/views/clients/clientsView.html',
                            controller: 'clientDEMOPAGEController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
                .state('/createAccount1', {
                    url: '/createAccount1',
                    views: {
                        'header': {
                            templateUrl: 'views/headers/createAccountHeader.html',
                            controller: 'HeaderController'
                        },
                        'content': {
                            templateUrl: 'views/createAccount1.html',
                            controller: 'NewUserController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
                .state('/createAccount2', {
                    url: '/createAccount2',
                    views: {
                        'header': {
                            templateUrl: 'views/headers/createAccountHeader.html',
                            controller: 'HeaderController'
                        },
                        'content': {
                            templateUrl: 'views/createAccount2.html',
                            controller: 'NewUserController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
                .state('/createAccount3', {
                    url: '/createAccount3',
                    views: {
                        'header': {
                            templateUrl: 'views/headers/createAccountHeader.html',
                            controller: 'HeaderController'
                        },
                        'content': {
                            templateUrl: 'views/createAccount3.html',
                            controller: 'DonateController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
            $urlRouterProvider.otherwise('/home');
        }



    ])
    .run(['$rootScope', '$location', 'UserService', function ($rootScope, $location, UserService) {
        $rootScope.$on('$routeChangeStart', function (event, nextRoute, previousRoute) {
            if (nextRoute.$$route.requiresLogin && !UserService.isLoggedIn()) {
                event.preventDefault();
                UserService.loginRedirect();
            } else if (nextRoute.$$route.requiresAdmin && !UserService.isAdmin()) {
                event.preventDefault();
                $location.replace().path('/');
            }
        });
    }]);