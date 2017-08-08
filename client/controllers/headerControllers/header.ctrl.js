app.controller("HeaderController", ['$scope', '$location', 'EmailFactory', 'UserService', 'SEOService',
    function ($scope, $location, EmailFactory, UserService, SEOService) {

        $scope.getStarted = function () {
            window.location.pathname = "/createAccount";
        };

        $scope.callMe = "CONTACT ME";
        // Contact us function
        $scope.getMessage = function () {
            var newEmail = {
                to: 'trowell52@gmail.com',
                from: $scope.email,
                subject: $scope.subject,
                content: $scope.content
            }
            var masterEmail = new EmailFactory(newEmail);
            masterEmail.$save(function () {
                alert("Thank you for your message! We'll get in touch with you soon!");


            }, function () {
                // console.log("Error sending the email")
                alert("All forms must be filled correctly!");
            });
            SEOService.setSEO({
                title: 'trimr',
                image: './images/Profilepics/driver.jpg',
                url: "trimr.io",
                description: "the haircut when you want, where you want"
            })

        }
        //// Stylist Application
        $scope.getStylistMessage = function () {
            var newStylistEmail = {
                to: 'trowell52@gmail.com',
                from: $scope.email2,
                subject: $scope.subject2,
                content: $scope.number2 + $scope.content2 + $scope.license2
            }
            var masterEmail = new EmailFactory(newStylistEmail);
            masterEmail.$save(function () {
                alert("Thanks for your interest in working for trimr! We'll get in touch with you soon!");
            }, function () {
                // console.log("Error sending the email")
                alert("All forms must be filled correctly!");
            });
        }
        SEOService.setSEO({
            title: 'trimr',
            image: './images/Profilepics/driver.jpg',
            url: "trimr.io",
            description: "the haircut when you want, where you want"
        })
    }
]);