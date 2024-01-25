import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyC89xgDTFwlnipTQwpZzqvaw9DbVip-6Kc",
    authDomain: "polypush-9e546.firebaseapp.com",
    projectId: "polypush-9e546",
    storageBucket: "polypush-9e546.appspot.com",
    messagingSenderId: "666096309173",
    appId: "1:666096309173:web:9493e811d9046bbc417ffc",
    measurementId: "G-2L4CJM7T6W"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission)
    if (permission === 'granted') {
        const token = await getToken(messaging, {
            vapidKey:
              "BKWAgOQvZOZxk_-WQs6sZdioh1Ra-Q6I-uQMDoAKL-9Z06VUsOUiMn2neMHquhbiy1KkF0_KrpSGSJ3rYLeMjWo",
          });
    
        console.log(token)
    }
    
}