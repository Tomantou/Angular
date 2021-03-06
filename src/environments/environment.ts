// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // boutiqueBackend: 'http://[::1]:3000',
  boutiqueBackend: 'http://[::1]:3000/',

  boutiqueContainer: "https://epibfilemanager.blob.core.windows.net/boutique/boutique/",
  authentication_api_url: "https://epib-oauth.azurewebsites.net/",
  client_id: "client_id",
  client_secret: "client_secret",
  scope: "boutique"
  // boutiqueBackend:'https://boutique-back-end.azurewebsites.net'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
