const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.get('/', (req,res,next) => {
	res.redirect('/notify')
}) 
app.get('/notify', function (req, res, next) {
  const accountSid = process.env.accountSid; 
	const authToken = process.env.authToken;
	const service_ssid = process.env.service_ssid;
	// ** es6 **//
	const client = require('twilio')(accountSid, authToken); 
	client.messages 
	  .create({ 
	     body: 'Hello Node : Ambuj Dubey',  
	     messagingServiceSid: service_ssid,      
	     to: '+918783750000'// Your number 
	   }) 
	  .then(message => {
	  	console.log('Hi finished',message.sid);
	  	res.send(`Your message sid = ${message.sid}`)
	  })      
	  .catch(err => {
	  	console.log('Error : ',err)
	  	res.send(`Something went wrong. Error = ${err}`)
	  });
})
 
app.listen(port, () => {
	console.log(`Your application running on port ${port}. \n url:- http://localhost/${port}`)
})