const accountSid = process.env.accountSid; 
const authToken = process.env.authToken;
const service_ssid = process.env.service_ssid;
// ** es6 **//
// const client = require('twilio')(accountSid, authToken); 
// client.messages 
//       .create({ 
//          body: 'Hello Node : Ambuj Dubey',  
//          messagingServiceSid: service_ssid,      
//          to: '+918783750000' // Your number
//        }) 
//       .then(message => console.log('Hi finished',message.sid))      
// 	  .catch(err => console.log('Error : ',err))
//       .done();

// ** OLD **//
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello Node : Ambuj Dubey',
    to: '+918783750000',  // Text this number
    // from: '+15005550006' // From a valid Twilio number
    messagingServiceSid: service_ssid,
})
.then((message) => console.log(message.sid))      
.catch(err => console.log('Error : ',err));