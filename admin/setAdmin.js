const admin = require('firebase-admin');
const serviceAccount = require('./atsiskaitomas-firebase-adminsdk-ioiec-749e623d5e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'aNLY68eMNJT56WDRTJW1riwkJAZ2';

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('Custom claims set for user', uid);
    process.exit();
  })
  .catch(error => {
    console.error(error);
  });
