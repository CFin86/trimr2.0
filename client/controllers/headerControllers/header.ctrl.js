app.controller("HeaderController", ['$scope', '$location', 'EmailFactory', 'SEOService',
    function ($scope, User, $location, SEOService) {


        $scope.getStarted = function () {
            window.location.pathname = "/createAccount";
        };

        $scope.callMe = "CONTACT ME";
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
                // $("#contactModal").modal('toggle');
                // $("#stylistModal").modal('toggle');
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