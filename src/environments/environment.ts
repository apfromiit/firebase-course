// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: "AIzaSyDSc5MGeJzaJxNTs5qReshLV_v3tR_YAns",
    authDomain: "fir-course-262ff.firebaseapp.com",
    projectId: "fir-course-262ff",
    storageBucket: "fir-course-262ff.appspot.com",
    messagingSenderId: "413138933117",
    appId: "1:413138933117:web:f638f4653327b1be4f6814"
  },
  api: {

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
