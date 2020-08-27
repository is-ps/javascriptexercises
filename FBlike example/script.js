var database = [
	{
		username: "Illy",
		password: "password2",
	},
	{
		username: "John",
		password: "thisismypassword",
	},
	{
		username: "Sally",
		password: "7777",
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired of the rain",
	},
	{
		username: "Lisa",
		timeline: "JavaScript is great!",
	},
	{
		username: "Peter",
		timeline: "seagulll!",
	}

];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);