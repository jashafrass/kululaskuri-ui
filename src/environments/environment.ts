// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apigatewayUrl: 'https://0sncvdvvg5.execute-api.eu-central-1.amazonaws.com/dev',
  region: 'eu-central-1',
  identityPoolId : 'eu-central-1:a5b3fdf3-9f49-4b0b-8770-cf80716c96b2'
};
