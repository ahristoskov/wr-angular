angular.module('activityAudit', [

])
.controller('MainCtrl', function($scope){
	$scope.categories = [
		{"id": 0, "name": "Design"},
		{"id": 1, "name": "Development"},
		{"id": 2, "name": "IT Management"},
		{"id": 3, "name": "Support"},
		{"id": 4, "name": "QA"}
	];
	$scope.items = [
	{
		"row":1,
		"ipAddress":"'10.145.196.138'",
		"user":"alex",
		"auditDate":"02/05/2015",
		"indexFields":"alex"
		},{
		"row":2,
		"ipAddress":"'10.2.199.187'",
		"user":"nmyatt",
		"auditDate":"02/05/2015",
		"indexFields":"nmyatt" 
		},{
		"row":3,
		"ipAddress":"'10.133.197.44'",
		"user":"nmyatt",
		"auditDate":"02/05/2015",
		"indexFields":"nmyatt"
		},{
		"row":4,
		"ipAddress":"'10.133.197.44'",
		"user":"nmyatt",
		"auditDate":"02/05/2015",
		"indexFields":"nmyatt"
		},{
		"row":5,
		"ipAddress":"'10.133.197.44'",
		"user":"nmyatt",
		"auditDate":"02/05/2015",
		"indexFields":"nmyatt"
		},{
		"row":6,
		"ipAddress":"'10.145.196.126'",
		"user":"yovo",
		"auditDate":"02/05/2015",
		"indexFields":"yovo"
		},{
		"row":7,
		"ipAddress":"'10.145.196.97'",
		"user":"nmyatt",
		"auditDate":"02/04/2015",
		"indexFields":"nmyatt"
		},{
		"row":8,
		"ipAddress":"'10.145.196.97'",
		"user":"nmyatt",
		"auditDate":"02/04/2015",
		"indexFields":"nmyatt"
		},{
		"row":9,
		"ipAddress":"'10.145.196.87'",
		"user":"ian",
		"auditDate":"02/04/2015",
		"indexFields":"ian"
		},{
		"row":10,
		"ipAddress":"'10.145.196.17'",
		"user":"yovo",
		"auditDate":"02/04/2015",
		"indexFields":"yovo"
		}
]
})