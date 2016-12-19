var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/myNodjsTest';  

var Employee = require('../modals/employee');

var employeeRepository = function(){

		var self = this;

		self.saveEmployee = function(dataSave) {

			var employee = new Employee(dataSave);

				console.log("employeeRepository = ", employee);

		// Use connect method to connect to the Server
		MongoClient.connect(url, function (err, db) {
		  if (err) {
		    console.log('Unable to connect to the mongoDB server. Error:', err);
		  } else {
		    //HURRAY!! We are connected. :)
		    console.log('Connection established to', url);

		    // Get the documents collection
		    var collection = db.collection('Employee');
		    // Insert some users
		    collection.insert([dataSave], function (err, result) {
		      if (err) {
		        console.log(err);
		      } else {
		        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
		      }
		      //Close connection
		      db.close();
		    });
		    
		  }
		});

		return "200";
		}
}

module.exports = employeeRepository;
