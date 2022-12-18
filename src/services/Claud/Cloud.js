import { initializeApp } from "firebase/app";

export class CloudServices {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "delivery-food-fp.firebaseapp.com",
      projectId: "delivery-food-fp",
      storageBucket: "delivery-food-fp.appspot.com",
      messagingSenderId: "689603114333",
      appId: process.env.APP_ID,
      measurementId: "G-P8HK7X7Q7C",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudServices();
