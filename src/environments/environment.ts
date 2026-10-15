// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    email: "glabaka@birt.ikaslea.eus",
    password: "test1234"
  },
  firebase :{
    apiKey: "AIzaSyD6j8uWnp9xsDT8ePMT-woYb0-4xqyw4NQ",
  authDomain: "pruebas-d1f1d.firebaseapp.com",
  projectId: "pruebas-d1f1d",
  storageBucket: "pruebas-d1f1d.firebasestorage.app",
  messagingSenderId: "498428942779",
  appId: "1:498428942779:web:dabc4a198018234a7d0c9e"
},
testUser:{
    email: "glabaka@birt.ikaslea.eus",
    password: "test1234"
}
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
