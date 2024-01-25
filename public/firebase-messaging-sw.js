importScripts(
    'https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js'
  );
  importScripts(
    'https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js'
  );

const firebaseConfig = {
    apiKey: "AIzaSyC89xgDTFwlnipTQwpZzqvaw9DbVip-6Kc",
    authDomain: "polypush-9e546.firebaseapp.com",
    projectId: "polypush-9e546",
    storageBucket: "polypush-9e546.appspot.com",
    messagingSenderId: "666096309173",
    appId: "1:666096309173:web:9493e811d9046bbc417ffc",
    measurementId: "G-2L4CJM7T6W"
  };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };
  console.log(notificationTitle, notificationOptions)

 self.registration.showNotification(notificationTitle, notificationOptions);
});
