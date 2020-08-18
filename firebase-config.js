var admin = require("firebase-admin");

var serviceAccount = require("./volunteer-collect-firebase-adminsdk-lmacl-7a677ce2bc.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://volunteer-collect.firebaseio.com"
})

module.exports.admin = admin