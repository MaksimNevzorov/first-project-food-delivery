import { initializeApp } from "firebase/app";

export class CloudServices {
  constructor() {
    this.config = {
      apiKey: process.env.APY_KEY,
      authDomain: "online-cinema-168e3.firebaseapp.com",
      projectId: "online-cinema-168e3",
      storageBucket: "online-cinema-168e3.appspot.com",
      messagingSenderId: "279697169280",
      appId: process.env.APP_ID,
      measurementId: "G-X785Z76RL6",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudServices();
