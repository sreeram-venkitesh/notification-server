const express = require('express')
const bodyparser = require('body-parser')
const { admin } = require('./firebase-config')

const app = express()
app.use(bodyparser.json())

const port = 3000
const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};

//const  registrationToken = 'ccyxo6ECqRA:APA91bHcSKrBQsaHffFa4V4YVUdPFuun4lUQP-85LGhCmJOa60Wnvcx-yDz6M4O4gkVseDTAxkVMwe0gPi9E0YLs3II7VDhVkRuYoiSIwwRL1raER3wZzCfry2JIvtpUJHG4I-1pIr_B'
const messages = [{
  notification: {
    title: 'Notification',
    body: 'kooi',
  },
  condition: "!('all' in topics)"
}];

// const options =  notification_options

admin.messaging().sendAll(messages)
  .then(() => {
    console.log("Notification sent successfully")
  })
  .catch(error => {
    console.log(error);
  });

// app.listen(port, () =>{
// console.log("listening to port"+port)
// })