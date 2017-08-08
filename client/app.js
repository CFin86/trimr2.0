var app = angular.module("TrimR", ['ui.router', 'ngResource', "TrimR.factories", "TrimR.services"]);

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
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('/createAccount1', {
                url: '/createAccount1',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/createAccount1.html',
                        controller: 'NewUserController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('/createAccount2', {
                url: '/createAccount2',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/createAccount2.html',
                        controller: 'NewUserController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
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
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('howItWorks', {
                url: '/trimrworks',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/howItWorks.html',
                        controller: 'HowItWorksController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/login.html',
                        controller: 'LoginController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('notloggedin', {
                url: '/notloggedin',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/notloggedin.html',
                        controller: 'LoginController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
             .state('test', {
                url: '/test',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/test.html',
                        controller: 'LoginController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('stylistlogin', {
                url: '/stylistlogin',
                views: {
                    'header': {
                        templateUrl: 'views/headers/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/stylistlogin.html',
                        controller: "StylistLoginController",
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
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
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('stylist', {
                url: '/stylistdashboard',
                views: {
                    'header': {
                        templateUrl: 'views/headers/stylistViewhead.html',
                        controller: 'ClientHeaderController'
                    },
                    'content': {
                        templateUrl: 'views/stylist/stylist.html',
                        controller: 'stylistDEMOPAGEController',
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'WelcomeController'
                    }
                }
            })
        $urlRouterProvider.otherwise('/')
    }
])