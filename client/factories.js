angular.module("TrimR.factories", ["ngResource"])

    .factory("User", ["$resource", function ($resource) {
        return $resource("http://localhost:3000/api/users/:id", {
            id: "@id"
        }, {
            "update": {
                method: "PUT"
            }
        });
    }])
    .factory('EmailFactory', ['$resource', function ($resource) {
        return $resource('http://localhost:3000/api/contact')
    }])

    .factory('DonationFactory', ['$resource', function ($resource) {
        return $resource('http://localhost:3000/api/donations')
    }])