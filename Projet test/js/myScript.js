'use strict';

/**
 * Déclaration de l'application myApp
 */
var myApp = angular.module('myApp', [
    'technicalTest'
]);
/**
 * Déclaration du module technicalTest
 */
var technicalTest = angular.module('technicalTest',[]);

/**
 * Contrôleur de l'application myApp
 */
technicalTest.controller('appCtrl', ['$scope',
    
    function ($scope) {
        var conversation = $scope.conversation = [
        	{
        		authorId: 1,
        		author: "Jean Gabin",
        		img: "img/img1.jpg",
        		text: "Hello everyone !"
        	},
        	{
        		authorId: 2,
        		author: "Petit Poix",
        		img: "img/img2.jpg",
        		text: "Hi !"
        	},
        	{
        		authorId: 1,
        		author: "Jean Gabin",
        		img: "img/img1.jpg",
        		text: "How are you ?"
        	},
        	{
        		authorId: 3,
        		author: "Hugues Gentil",
        		img: "img/img3.jpg",
        		text: "Lorem ipsum dolor sit amet,"
        		+" consectetur adipiscing elit,"
        		+" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        		+" Ut enim ad minim veniam,"
        		+" quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        		+" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        		+" Excepteur sint occaecat cupidatat non proident,"
        		+" sunt in culpa qui officia deserunt mollit anim id est laborum."
        	}
        ];

        // FUNCTION
        $scope.clic = function () {alert('Hello '+$scope.userName+ ' !');}

    }

    
    
]);

			