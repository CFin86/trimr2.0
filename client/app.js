var app = angular.module("TrimR", ['ui.router', 'ngResource',"TrimR.factories", "TrimR.services"]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
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
            .state('howItWorks', {
                url: '/trimrWorks',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/howItWorks.html',
                    }
                }
            })
            .state('clientDashboard', {
                url: '/clientdashboard',
                views: {
                    'header': {
                        templateUrl: 'views/headers/clientsViewHeader.html',
                        controller: 'ClientHeaderController'
                    },
                    'content': {
                        templateUrl: '/views/clients/clientsView.html',
                        controller: 'clientsViewController',
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
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
            .state('stylistlogin', {
                url: '/stylistlogin',
                views: {
                    'content': {
                        templateUrl: 'views/stylistlogin.html',
                          controller:"StylistLoginController",
                    }
                }
            })
            .state('stylist', {
                url: '/stylistDashboard',
                views: {
                    'content': {
                        templateUrl: 'views/stylist/stylist.html',
                        // controller: 'ScheduleController',
                    }
                }
            })
            // .state('stylistdashboard', {
            //     url: '/stylistdashboard',
            //     views: {
            //         'header': {
            //             templateUrl: 'views/headers/header.html',
            //             controller: 'HeaderController',
            //         },
            //         'content': {
            //             templateUrl: '/views/stylist/stylistDEMOPAGE.html',
            //             controller: 'stylistDEMOPAGEController',
            //         },
            //         'footer': {
            //             templateUrl: 'views/footer.html',
            //         }
            //     }
            // })

        $urlRouterProvider.otherwise('/')
    }
])