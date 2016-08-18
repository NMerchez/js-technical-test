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
    	// VARIABLES
    	$scope.issueId = "165362";

    	$scope.authors = [
	        {
	        	authorId: 1,
	        	authorName: "Jean Gabin",
	        	img: "img/img1.jpg"
	        },
	        {
	        	authorId: 2,
	        	authorName: "Petit Poix",
	        	img: "img/img2.jpg"
	        },
	        {
	        	authorId: 3,
	        	authorName: "Hugues Gentil",
	        	img: "img/img3.jpg"
	        }
        ];

        $scope.conversation = [
        	{
        		authorId: 1,
        		messageId: 1,
        		text: "Hello everyone !",
	        	img: "img/img1.jpg"
        	},
        	{
        		authorId: 2,
        		messageId: 2,
        		text: "Hi !",
	        	img: "img/img2.jpg"
        	},
        	{
        		authorId: 1,
        		messageId: 3,
        		text: "How are you ?",
	        	img: "img/img1.jpg"
        	},
        	{
        		authorId: 3,
        		messageId: 4,
        		text: "Lorem ipsum dolor sit amet,"
        		+" consectetur adipiscing elit,"
        		+" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        		+" Ut enim ad minim veniam,"
        		+" quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        		+" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        		+" Excepteur sint occaecat cupidatat non proident,"
        		+" sunt in culpa qui officia deserunt mollit anim id est laborum.",
	        	img: "img/img3.jpg"
        	}
        ];

        // FUNCTIONS
        $scope.filterFunction = function (authorId) {
        	alert('Hello '+ authorId + ' !');
        }
        $scope.getAuthorName = function(authorId){
        	for (var i = $scope.authors.length - 1; i >= 0; i--) {
        		if($scope.authors[i].authorId == authorId){
        			return $scope.authors[i].authorName;
        		}
        	}
        }
        $scope.getUsers = function(){
        	var users = "";
        	for (var i = $scope.authors.length - 1; i >= 0; i--) {
        		if($scope.authors[i].authorId != 1){
        			users = users + $scope.authors[i].authorName + ", "
        		}
        	}
        	return users.substring(0,users.length-2);
        }
        

    }

    
    
]);

			