import {EnvironmentProviders,importProvidersFrom} from "@angular/core";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
  provideFirebaseApp(() => initializeApp({"projectId":"rewear-2c5c1","appId":"1:210168410363:web:b56c941ce66e3bfae8005e","storageBucket":"rewear-2c5c1.appspot.com","apiKey":"AIzaSyCW02iacGdibQX6jLD4Lta_Pu_-rERpnJI","authDomain":"rewear-2c5c1.firebaseapp.com","messagingSenderId":"210168410363"})),
  provideAuth(() => getAuth()),
]);

export { firebaseProviders };
