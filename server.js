var express = require('express'),
		app = express()

app.use(express.static(__dirname + "/public"))

app.get('/contactlist', function(req, res) {
	console.log("I received a GET request")

	var personOne = {
		name: 'Alex',
		email: 'alex@email.com',
		number: '444-555-6666'
	}

	var personTwo = {
		name: 'Emily',
		email: 'emily@email.com',
		number: '444-666-5555'
	}

	var personThree = {
		name: 'John',
		email: 'johnAppleseed@email.com',
		number: '333-444-5555'
	}

	var contactList = [personOne, personTwo, personThree]
	res.json(contactList)
})

app.listen(3000)
console.log("Server running on port 3000")