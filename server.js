const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
  {name:'Mark'},
  {name:'Jill'}
]

app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

app.get('/users/:id', function(req,res){
  console.log(req.params.id);
 	res.json({
 	 	success: true,
 	 	message: 'got one user!',
 	 	users: req.params.id
 	})
})

app.post('/login', function(req,res){
    // Typically passwords are encrypted using somthing like bcrypt before sending to database
    const username=req.body.username;
    const password=req.body.password;

    // This should come from the database
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (userName==mockUsername && password==mockPassword){
      // In practice, use JSON web token sign method here to make an encrypted token
  		res.json({
  			success: true,
  			message: 'password and username match!',
  			token: 'encrypted token goes here'
  		})
    } else {
      res.json({
        sucess:false,
        message:'password and username do not match'
      })
    }
})

app.listen(8000,function(){console.log("server is running");})
