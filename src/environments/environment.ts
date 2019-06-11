// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  githubKey: "cae9f49cda8c4d531336c814758e9dca5a1db0db",
  repos: [
    { name: "CGG", path: "alchemycodelab/caregiver-go" },
    { name: "YYC-Migration", path: "alchemycodelab/yoyo-migration-server" },
    { name: "YYC-Server", path: "alchemycodelab/yoyo-server" },
    { name: "YYC", path: "alchemycodelab/yoyochinese" }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
