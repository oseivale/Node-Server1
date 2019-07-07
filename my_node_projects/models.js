var http = require('http');
var mongoose = require('mongoose');

var uristring=
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';

var theport = process.env.PORT || 5000;

mongoose.connect(uristrng, function (err, res){
    if(err){
        console.log('ERROR connecting to: '+ uristring + '. ' + err);    
    } else {
        console.log('SUCCEEDED connected to: '+ uristring);
    }
});

//Modelling a user by specifying its properties in a mongoose schema

var userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: { type: String, trim: true }
    },
    age : { type: Number, min: 0 }
});
// Instantiating a new user 
// You create a Mongoose model from the schema in the 
// PowerUsers collection and populate it with a specific user's details

var PUser = mongoose.model('PowerUsers', userSchema);

// Creating one user.
var johndoe = new PUser ({
    name: {first: 'John', last: 'Doe'},
    age: 25
});

// Saving it to the database
// Sample user 'johndoe' is created with an age of 25
// Then saved to the MongoDB database
johndoe.save(function (err){
    if(err) {
        console.log('Error on save!');
    }
});